const fs = require('fs');
const path = require('path');

// 数据文件路径
const RECORDS_FILE = path.join(__dirname, '..', '..', 'records.js');

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

exports.handler = async (event, context) => {
  // 设置CORS头
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
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
    // 读取所有记录
    const records = parseRecordsFromRecordsFile();
    
    // 计算待审核记录数量
    const pendingCount = records.filter(record => record.status === 'pending').length;
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        count: pendingCount
      })
    };
  } catch (error) {
    console.error('处理请求失败:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: '获取待审核记录数量失败'
      })
    };
  }
};