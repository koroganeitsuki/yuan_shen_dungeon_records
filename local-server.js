// 本地开发服务器
const express = require('express');
const cors = require('cors');

// 导入云函数
const healthFunction = require('./netlify/functions/health');
const submitRecordFunction = require('./netlify/functions/submit-record');
const pendingCountFunction = require('./netlify/functions/pending-count');

const app = express();

// 启用CORS
app.use(cors());

// 解析JSON请求体
app.use(express.json());

// 路由映射
app.get('/api/health', async (req, res) => {
  const event = {
    httpMethod: 'GET',
    headers: req.headers,
    body: null
  };
  
  try {
    const result = await healthFunction.handler(event, {});
    res.status(result.statusCode)
       .set(result.headers)
       .send(JSON.parse(result.body));
  } catch (error) {
    res.status(500).json({ success: false, message: '服务器错误', error: error.message });
  }
});

app.post('/api/submit-record', async (req, res) => {
  const event = {
    httpMethod: 'POST',
    headers: req.headers,
    body: JSON.stringify(req.body)
  };
  
  try {
    const result = await submitRecordFunction.handler(event, {});
    res.status(result.statusCode)
       .set(result.headers)
       .send(JSON.parse(result.body));
  } catch (error) {
    res.status(500).json({ success: false, message: '服务器错误', error: error.message });
  }
});

app.get('/api/pending-count', async (req, res) => {
  const event = {
    httpMethod: 'GET',
    headers: req.headers,
    body: null
  };
  
  try {
    const result = await pendingCountFunction.handler(event, {});
    res.status(result.statusCode)
       .set(result.headers)
       .send(JSON.parse(result.body));
  } catch (error) {
    res.status(500).json({ success: false, message: '服务器错误', error: error.message });
  }
});

// 静态文件服务
app.use(express.static('./'));

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`本地开发服务器运行在 http://localhost:${PORT}`);
  console.log('API端点:');
  console.log('  - GET  http://localhost:${PORT}/api/health');
  console.log('  - POST http://localhost:${PORT}/api/submit-record');
  console.log('  - GET  http://localhost:${PORT}/api/pending-count');
});
