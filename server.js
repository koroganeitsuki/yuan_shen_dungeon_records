// 原神幽境危战记录提交服务器
// 用于接收和处理玩家提交的通关记录

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dns = require('dns');

// 强制使用IPv4优先，避免IPv6连接问题
dns.setDefaultResultOrder('ipv4first');

const app = express();
const PORT = 3000;

// 中间件
app.use(cors({
    origin: '*', // 允许所有来源访问
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Admin-Token']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 管理员认证中间件
const adminAuthMiddleware = (req, res, next) => {
    // 从环境变量或默认值获取管理员密码
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'YSadmin2025';
    const token = req.headers['admin-token'];
    
    // 如果没有提供token，检查查询参数
    if (!token) {
        const password = req.query.password;
        if (password && password === ADMIN_PASSWORD) {
            return next();
        }
    } else {
        // 简单的token验证（实际项目中应该使用更安全的JWT）
        if (token === ADMIN_PASSWORD) {
            return next();
        }
    }
    
    res.status(401).json({
        success: false,
        message: '未授权访问，请提供正确的管理员密码'
    });
};

// 健康检查不需要认证
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: '服务器运行正常',
        timestamp: new Date().toISOString()
    });
});

// API端点：下载records.js文件（临时使用）
app.get('/api/download-records', (req, res) => {
    try {
        // 读取records.js文件
        const recordsContent = readRecordsFile();
        
        // 设置响应头，让浏览器下载文件
        res.setHeader('Content-Disposition', 'attachment; filename=records.js');
        res.setHeader('Content-Type', 'application/javascript');
        res.setHeader('Content-Length', Buffer.byteLength(recordsContent, 'utf8'));
        
        // 返回文件内容
        res.send(recordsContent);
        log('records.js文件下载成功');
    } catch (error) {
        log(`下载records.js文件失败: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// 静态文件服务 - 用于提供HTML、CSS、JS等静态文件
app.use(express.static(__dirname));

// 数据文件路径
const DATA_FILE = path.join(__dirname, 'data.js');
const RECORDS_FILE = path.join(__dirname, 'records.js');

// 日志文件路径
const LOG_FILE = path.join(__dirname, 'server.log');

// 日志函数
function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(LOG_FILE, logMessage, 'utf8');
}

// 读取数据文件
function readDataFile() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return data;
    } catch (error) {
        log(`读取数据文件失败: ${error.message}`);
        throw error;
    }
}

// 写入数据文件
function writeDataFile(data) {
    try {
        fs.writeFileSync(DATA_FILE, data, 'utf8');
        log('数据文件写入成功');
    } catch (error) {
        log(`写入数据文件失败: ${error.message}`);
        throw error;
    }
}

// 读取记录文件
function readRecordsFile() {
    try {
        const data = fs.readFileSync(RECORDS_FILE, 'utf8');
        return data;
    } catch (error) {
        log(`读取记录文件失败: ${error.message}`);
        throw error;
    }
}

// 写入记录文件
function writeRecordsFile(data) {
    try {
        fs.writeFileSync(RECORDS_FILE, data, 'utf8');
        log('记录文件写入成功');
    } catch (error) {
        log(`写入记录文件失败: ${error.message}`);
        throw error;
    }
}

// 解析记录文件获取记录数组
function parseRecordsFromRecordsFile() {
    try {
        const data = readRecordsFile();
        
        // 创建一个安全的执行环境
        const vm = require('vm');
        const sandbox = { window: {}, module: { exports: {} } }; // 添加window和module对象到沙箱中
        const script = new vm.Script(data + '\nmodule.exports = Records;');
        const context = new vm.createContext(sandbox);
        script.runInContext(context);
        
        const records = context.module.exports; // 从module.exports获取记录数组，而不是直接从context.Records获取
        
        if (!records || !Array.isArray(records)) {
            return [];
        }
        
        return records;
    } catch (error) {
        log(`解析记录文件失败: ${error.message}`);
        throw error;
    }
}

// 生成新的记录文件内容
function generateRecordsJsContent(records) {
    const safeString = (str) => {
        if (typeof str === 'string') {
            return str.replace(/'/g, "\\'");
        }
        return String(str || '');
    };
    
    const recordsArray = records.map(record => {
        return `{
            id: ${record.id},
            player: '${safeString(record.player)}',
            mainc: '${safeString(record.mainc)}',
            team: [
                ${record.team.map(member => 
                    `{
                        character: '${safeString(member.character)}',
                        constellation: ${member.constellation},
                        weapon: ${member.weapon}
                    }`
                ).join(',\n                ')}
            ],
            time: ${record.time},
            boss: '${safeString(record.boss)}',
            gold: ${record.gold},
            constgold: ${record.constgold},
            notes: '${safeString(record.notes)}',
            video: '${safeString(record.video)}',
            status: '${safeString(record.status)}',
            submitTime: '${safeString(record.submitTime)}',
            cup: '${safeString(record.cup || '无')}'
        }`;
    }).join(',\n        ');
    
    return `// 通关记录数据
const Records = [
        ${recordsArray}
    ];

// 确保Records可以被其他脚本访问
window.Records = Records;`;
}

// 解析整个DataStore对象，包括access变量
function parseDataStore() {
    const data = readDataFile();
    
    try {
        // 提取access变量的值
        const accessMatch = data.match(/const\s+access\s*=\s*['"]([^'"]*)['"]\s*;/);
        const accessValue = accessMatch ? accessMatch[1] : '';
        
        // 创建一个可以安全执行的JavaScript代码字符串
        // 保留access变量的定义，以便在执行时可用
        const jsCode = data + '\nmodule.exports = DataStore;';
        
        // 写入临时文件并执行
        const tempFilePath = path.join(__dirname, 'temp_data_store.js');
        fs.writeFileSync(tempFilePath, jsCode, 'utf8');
        
        // 动态导入临时文件
        const dataStore = require(tempFilePath);
        
        // 删除临时文件
        fs.unlinkSync(tempFilePath);
        
        // 不再处理records数组，因为数据现在存储在records.js中
        
        return { accessValue, dataStore };
        
    } catch (error) {
        log(`解析DataStore对象失败: ${error.message}`);
        throw error;
    }
}

// 解析数据文件获取记录数组
function parseRecordsFromDataFile() {
    try {
        // 从records.js中解析记录数组
        return parseRecordsFromRecordsFile();
    } catch (error) {
        log(`解析records数组失败: ${error.message}`);
        throw error;
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

// 将新记录添加到记录文件
function addRecordToDataFile(newRecord) {
    try {
        // 从records.js中解析记录数组
        let records = parseRecordsFromRecordsFile();
        
        // 生成新ID
        const newId = generateNewId(records);
        newRecord.id = newId;
        
        // 添加新记录到记录数组
        records.push(newRecord);
        
        // 重新生成records.js文件的内容
        const recordsJsContent = generateRecordsJsContent(records);
        
        // 写入记录文件
        writeRecordsFile(recordsJsContent);
        log(`新记录添加成功，ID: ${newId}`);
        return newId;
        
    } catch (error) {
        log(`添加记录到记录文件失败: ${error.message}`);
        throw error;
    }
}

// 生成data.js文件的内容
function generateDataJsContent(accessValue, dataStore) {
    // 生成access变量的定义
    const accessDefinition = `// 资源访问路径前缀
const access = '${accessValue}';
`;
    
    // 获取DataStore对象的所有键
    const dataStoreKeys = Object.keys(dataStore);
    
    // 生成DataStore对象的定义
    let dataStoreDefinition = `// 数据存储模块
const DataStore = {
    // 元素属性颜色映射
    elementColors: ${JSON.stringify(dataStore.elementColors, null, 4)},
    
    // 角色数据
    characters: [
        // 这里需要保持原始的characters数组格式，因为包含access + '...'的字符串拼接
        ${generateCharactersArray(dataStore.characters, accessValue)}
    ],
    
    // 通关记录 - 从records.js中读取
    get records() {
        return window.Records || [];
    },
`;
    
    // 添加其他方法和属性（跳过已经处理过的属性）
    const processedKeys = ['elementColors', 'characters', 'records'];
    for (const key of dataStoreKeys) {
        if (processedKeys.includes(key)) {
            continue;
        }
        
        const value = dataStore[key];
        let valueString;
        
        if (typeof value === 'function') {
            // 如果是函数，直接保留函数体
            valueString = value.toString();
        } else {
            // 如果是普通对象或数组，使用JSON.stringify
            valueString = JSON.stringify(value, null, 4);
        }
        
        dataStoreDefinition += `    
    // ${key}
    ${key}: ${valueString},
`;
    }
    
    // 关闭DataStore对象
    dataStoreDefinition += `};`;
    
    // 合并所有内容
    return accessDefinition + '\n' + dataStoreDefinition;
}

// 生成characters数组的JavaScript字符串表示
function generateCharactersArray(characters, accessValue) {
    return characters.map(char => {
        // 处理avatar字段，恢复access + '...'的格式
        let avatarField;
        if (accessValue && char.avatar.startsWith(accessValue)) {
            const avatarPath = char.avatar.substring(accessValue.length);
            avatarField = `avatar: access + '${avatarPath}'`;
        } else {
            avatarField = `avatar: '${char.avatar}'`;
        }
        
        return `{
            id: '${char.id}',
            name: '${char.name}',
            ${avatarField},
            element: '${char.element}'
        }`;
    }).join(',\n        ');
}

// 生成records数组的JavaScript字符串表示
function generateRecordsArray(records) {
    // 安全地处理字符串，确保在调用replace之前是字符串类型
    const safeString = (str) => {
        if (typeof str === 'string') {
            return str.replace(/'/g, "\\'");
        }
        return String(str || '');
    };
    
    return records.map(record => {
        return `{
            id: ${record.id},
            player: '${safeString(record.player)}',
            mainc: '${safeString(record.mainc)}',
            team: [
                ${record.team.map(member => 
                    `{
                        character: '${safeString(member.character)}',
                        constellation: ${member.constellation},
                        weapon: ${member.weapon}
                    }`
                ).join(',\n                ')}
            ],
            time: ${record.time},
            boss: '${safeString(record.boss)}',
            gold: ${record.gold},
            constgold: ${record.constgold},
            notes: '${safeString(record.notes)}',
            video: '${safeString(record.video)}',
            status: '${safeString(record.status)}',
            submitTime: '${safeString(record.submitTime)}',
            cup: '${safeString(record.cup || '无')}'
        }`;
    }).join(',\n        ');
}

// API端点：提交通关记录
app.post('/api/submit-record', (req, res) => {
    try {
        const recordData = req.body;
        
        log(`收到新的记录提交请求: ${recordData.player} - ${recordData.boss}`);
        
        // 验证必要字段
        const requiredFields = ['player', 'mainc', 'team', 'time', 'boss', 'gold', 'constgold', 'video', 'submitTime'];
        for (const field of requiredFields) {
            // 检查字段是否真的不存在，而不是检查值是否为falsy（允许0值）
            if (typeof recordData[field] === 'undefined' || recordData[field] === null) {
                log(`验证失败: 缺少必要字段 ${field}`);
                return res.status(400).json({ success: false, message: `缺少必要字段: ${field}` });
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
                log('验证失败: 队伍数据无效');
                return res.status(400).json({ success: false, message: '队伍数据无效，需要至少1个角色' });
            }
        } else if (teamData.length < 1) {
            log('验证失败: 队伍数据无效');
            return res.status(400).json({ success: false, message: '队伍数据无效，需要至少1个角色' });
        }
        
        // 更新recordData中的team为数组格式
        recordData.team = teamData;
        
        // 验证每个角色的数据
        for (const member of recordData.team) {
            if (!member.character || typeof member.character !== 'string' || typeof member.constellation !== 'number' || typeof member.weapon !== 'number') {
                log(`验证失败: 角色数据无效 - ${JSON.stringify(member)}`);
                return res.status(400).json({ success: false, message: '角色数据无效' });
            }
        }
        
        // 设置状态为待审核
        recordData.status = 'pending';
        
        // 添加记录到数据文件
        const newId = addRecordToDataFile(recordData);
        
        log(`记录提交成功，ID: ${newId}`);
        
        // 返回成功响应
        res.json({
            success: true,
            message: '通关记录提交成功！管理员将尽快审核。',
            recordId: newId
        });
        
    } catch (error) {
        log(`处理提交请求时发生错误: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// API端点：获取待审核记录数量（管理员用）
app.get('/api/pending-count', (req, res) => {
    try {
        const records = parseRecordsFromDataFile();
        const pendingCount = records.filter(record => record.status === 'pending').length;
        
        res.json({
            success: true,
            pendingCount: pendingCount
        });
    } catch (error) {
        log(`获取待审核记录数量失败: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// API端点：健康检查
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: '服务器运行正常',
        timestamp: new Date().toISOString()
    });
});

// 管理员API端点：获取所有记录
app.get('/api/admin/records', adminAuthMiddleware, (req, res) => {
    try {
        const records = parseRecordsFromRecordsFile();
        res.json({
            success: true,
            records: records
        });
    } catch (error) {
        log(`获取记录失败: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// 管理员API端点：更新记录
app.put('/api/admin/records/:id', adminAuthMiddleware, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedRecord = req.body;
        
        log(`收到更新记录请求，ID: ${id}`);
        
        // 从records.js中解析记录数组
        let records = parseRecordsFromRecordsFile();
        
        // 查找要更新的记录
        const recordIndex = records.findIndex(record => record.id === id);
        if (recordIndex === -1) {
            log(`未找到要更新的记录，ID: ${id}`);
            return res.status(404).json({
                success: false,
                message: '未找到要更新的记录'
            });
        }
        
        // 更新记录
        records[recordIndex] = {
            ...records[recordIndex],
            ...updatedRecord,
            id: id // 确保ID不变
        };
        
        // 重新生成records.js文件的内容
        const recordsJsContent = generateRecordsJsContent(records);
        
        // 写入记录文件
        writeRecordsFile(recordsJsContent);
        
        log(`记录更新成功，ID: ${id}`);
        
        // 返回成功响应
        res.json({
            success: true,
            message: '记录更新成功',
            record: records[recordIndex]
        });
        
    } catch (error) {
        log(`更新记录时发生错误: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// 管理员API端点：删除记录
app.delete('/api/admin/records/:id', adminAuthMiddleware, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        log(`收到删除记录请求，ID: ${id}`);
        
        // 从records.js中解析记录数组
        let records = parseRecordsFromRecordsFile();
        
        // 查找要删除的记录
        const recordIndex = records.findIndex(record => record.id === id);
        if (recordIndex === -1) {
            log(`未找到要删除的记录，ID: ${id}`);
            return res.status(404).json({
                success: false,
                message: '未找到要删除的记录'
            });
        }
        
        // 删除记录
        records.splice(recordIndex, 1);
        
        // 重新生成records.js文件的内容
        const recordsJsContent = generateRecordsJsContent(records);
        
        // 写入记录文件
        writeRecordsFile(recordsJsContent);
        
        log(`记录删除成功，ID: ${id}`);
        
        // 返回成功响应
        res.json({
            success: true,
            message: '记录删除成功'
        });
        
    } catch (error) {
        log(`删除记录时发生错误: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// 管理员API端点：创建新记录
app.post('/api/admin/records', adminAuthMiddleware, (req, res) => {
    try {
        const newRecord = req.body;
        
        log(`收到创建新记录请求`);
        
        // 验证必要字段
        const requiredFields = ['player', 'mainc', 'team', 'time', 'boss', 'gold', 'constgold'];
        for (const field of requiredFields) {
            if (!newRecord[field]) {
                log(`验证失败: 缺少必要字段 ${field}`);
                return res.status(400).json({
                    success: false,
                    message: `缺少必要字段: ${field}`
                });
            }
        }
        
        // 验证队伍数据
        if (!Array.isArray(newRecord.team) || newRecord.team.length < 1) {
            log('验证失败: 队伍数据无效');
            return res.status(400).json({
                success: false,
                message: '队伍数据无效，需要至少1个角色'
            });
        }
        
        // 验证每个角色的数据
        for (const member of newRecord.team) {
            if (!member.character || typeof member.constellation !== 'number' || typeof member.weapon !== 'number') {
                log(`验证失败: 角色数据无效 - ${JSON.stringify(member)}`);
                return res.status(400).json({
                    success: false,
                    message: '角色数据无效'
                });
            }
        }
        
        // 设置默认值
        newRecord.status = newRecord.status || 'pending';
        newRecord.submitTime = newRecord.submitTime || new Date().toISOString();
        
        // 从records.js中解析记录数组
        let records = parseRecordsFromRecordsFile();
        
        // 生成新ID
        const newId = generateNewId(records);
        newRecord.id = newId;
        
        // 添加新记录到记录数组
        records.push(newRecord);
        
        // 重新生成records.js文件的内容
        const recordsJsContent = generateRecordsJsContent(records);
        
        // 写入记录文件
        writeRecordsFile(recordsJsContent);
        
        log(`新记录创建成功，ID: ${newId}`);
        
        // 返回成功响应
        res.json({
            success: true,
            message: '新记录创建成功',
            record: newRecord,
            recordId: newId
        });
        
    } catch (error) {
        log(`创建新记录时发生错误: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `服务器内部错误: ${error.message}`
        });
    }
});

// 启动服务器 - 监听所有地址（同时兼容IPv4和IPv6）
const server = app.listen(PORT, '0.0.0.0', () => {
    const address = server.address();
    log(`=== 服务器启动信息 ===`);
    log(`服务器启动成功，监听端口: ${PORT}`);
    log(`监听地址: ${address.address}`);
    log(`监听地址类型: ${address.family === 'IPv6' ? 'IPv6' : 'IPv4'}`);
    log(`=== API访问地址 ===`);
    log(`健康检查 (IPv4): http://localhost:${PORT}/api/health`);
    log(`健康检查 (IPv6): http://[::1]:${PORT}/api/health`);
    log(`提交通关记录: POST http://localhost:${PORT}/api/submit-record`);
    log(`=== 网页访问地址 ===`);
    log(`首页 (IPv4): http://localhost:${PORT}/index.html`);
    log(`上传页 (IPv4): http://localhost:${PORT}/upload.html`);
    log(`排行榜 (IPv4): http://localhost:${PORT}/ranking.html`);
    log(`首页 (IPv6): http://[::1]:${PORT}/index.html`);
    log(`上传页 (IPv6): http://[::1]:${PORT}/upload.html`);
    log(`排行榜 (IPv6): http://[::1]:${PORT}/ranking.html`);
    log(`=== 公网访问地址 ===`);
    log(`首页: http://[240e:361:aa3d:e010::e5e]:${PORT}/index.html`);
    log(`上传页: http://[240e:361:aa3d:e010::e5e]:${PORT}/upload.html`);
    log(`排行榜: http://[240e:361:aa3d:e010::e5e]:${PORT}/ranking.html`);
    log(`健康检查: http://[240e:361:aa3d:e010::e5e]:${PORT}/api/health`);
    log(`提交通关记录: POST http://[240e:361:aa3d:e010::e5e]:${PORT}/api/submit-record`);
    log(`=== 服务器现在支持IPv4和IPv6访问 ===`);
});

// 错误处理
process.on('uncaughtException', (error) => {
    log(`未捕获的异常: ${error.message}`);
    log(error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
    log(`未处理的Promise拒绝: ${reason}`);
});

// 导出函数供测试使用
module.exports = {
    generateDataJsContent
};