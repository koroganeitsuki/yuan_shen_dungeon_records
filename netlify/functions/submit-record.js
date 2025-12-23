const fs = require('fs');
const path = require('path');

// 数据文件路径
const RECORDS_FILE = path.join(__dirname, '..', '..', 'records.js');

// 安全处理字符串，避免引号转义问题
function safeString(str) {
  if (str === undefined || str === null) {
    return '';
  }
  return str.toString().replace(/'/g, "\\'");
}

// 读取并解析records.js文件
function parseRecordsFromRecordsFile() {
  try {
    const data = fs.readFileSync(RECORDS_FILE, 'utf8');
    
    // 使用正则表达式提取Records数组内容
    const recordsMatch = data.match(/const Records = \[(.*?)\];/s);
    if (!recordsMatch) {
      throw new Error('无法解析Records数组');
    }
    
    // 将提取的内容转换为JavaScript对象
    const recordsArrayStr = recordsMatch[1];
    const records = eval(`[${recordsArrayStr}]`);
    
    return records;
  } catch (error) {
    console.error('解析records.js失败:', error);
    return [];
  }
}

// 生成新的记录ID
function generateNewId(records) {
  if (records.length === 0) {
    return 1;
  }
  const maxId = Math.max(...records.map(record => record.id));
  return maxId + 1;
}

// 生成records.js文件内容
function generateRecordsJsContent(records) {
  const recordsArray = records.map(record => {
    const teamArray = record.team.map(member => `{
                        character: '${safeString(member.character)}',
                        constellation: ${member.constellation},
                        weapon: ${member.weapon}
                    }`).join(',\n                ');
    
    return `{
            id: ${record.id},
            player: '${safeString(record.player)}',
            mainc: '${safeString(record.mainc)}',
            team: [
                ${teamArray}
            ],
            time: ${record.time},
            boss: '${safeString(record.boss)}',
            gold: ${record.gold},
            constgold: ${record.constgold},
            notes: '${safeString(record.notes)}',
            video: '${safeString(record.video)}',
            status: '${safeString(record.status)}',
            submitTime: '${safeString(record.submitTime)}'
        }`;
  }).join(',\n        ');
  
  return `// 通关记录数据
const Records = [
        ${recordsArray}
    ];

// 确保Records可以被其他脚本访问
window.Records = Records;`;
}

// 写入records.js文件
function writeRecordsFile(content) {
  try {
    fs.writeFileSync(RECORDS_FILE, content, 'utf8');
    return true;
  } catch (error) {
    console.error('写入records.js失败:', error);
    return false;
  }
}

exports.handler = async (event, context) => {
  // 设置CORS头
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // 处理OPTIONS请求
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // 解析请求体
    const recordData = JSON.parse(event.body);
    
    // 验证必要字段
    const requiredFields = ['player', 'mainc', 'team', 'time', 'boss', 'gold', 'constgold', 'video', 'submitTime'];
    for (const field of requiredFields) {
      if (!recordData[field]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: `缺少必要字段: ${field}`
          })
        };
      }
    }
    
    // 验证队伍数据
    let teamData = recordData.team;
    
    // 如果team是对象而不是数组（单角色情况），将其转换为数组
    if (!Array.isArray(teamData)) {
      // 检查是否是有效的角色对象
      if (teamData.character && typeof teamData.constellation === 'number' && typeof teamData.weapon === 'number') {
        teamData = [teamData];
      } else {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: '队伍数据无效，需要至少1个角色'
          })
        };
      }
    } else if (teamData.length < 1) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: '队伍数据无效，需要至少1个角色'
        })
      };
    }
    
    // 更新recordData中的team为数组格式
    recordData.team = teamData;
    
    // 验证每个角色的数据
    for (const member of recordData.team) {
      if (!member.character || typeof member.character !== 'string' || typeof member.constellation !== 'number' || typeof member.weapon !== 'number') {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: '角色数据无效'
          })
        };
      }
    }
    
    // 设置状态为待审核
    recordData.status = 'pending';
    
    // 读取现有记录
    let records = parseRecordsFromRecordsFile();
    
    // 生成新ID
    const newId = generateNewId(records);
    recordData.id = newId;
    
    // 添加新记录到数组前面
    records.unshift(recordData);
    
    // 生成新的records.js内容
    const recordsJsContent = generateRecordsJsContent(records);
    
    // 写入数据文件
    if (writeRecordsFile(recordsJsContent)) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: '记录提交成功，等待审核！',
          recordId: newId
        })
      };
    } else {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: '保存记录失败，请稍后重试'
        })
      };
    }
  } catch (error) {
    console.error('处理请求失败:', error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        success: false,
        message: `请求格式错误或数据无效: ${error.message}`
      })
    };
  }
};