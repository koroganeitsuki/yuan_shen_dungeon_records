// 测试云函数的脚本
const healthFunction = require('./netlify/functions/health');
const submitRecordFunction = require('./netlify/functions/submit-record');

// 模拟健康检查请求
const healthEvent = {
  httpMethod: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: null
};

// 测试健康检查函数
console.log('测试健康检查函数...');
healthFunction.handler(healthEvent, {})
  .then(result => {
    console.log('健康检查响应:', result);
    console.log('响应体:', JSON.parse(result.body));
  })
  .catch(error => {
    console.error('健康检查失败:', error);
  });

// 模拟提交记录请求
const submitRecordEvent = {
  httpMethod: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    player: '测试玩家',
    mainc: '钟离',
    team: [
      {
        character: '钟离',
        constellation: 6,
        weapon: 5
      },
      {
        character: '班尼特',
        constellation: 6,
        weapon: 5
      },
      {
        character: '香菱',
        constellation: 6,
        weapon: 5
      },
      {
        character: '行秋',
        constellation: 6,
        weapon: 5
      }
    ],
    time: 120,
    boss: '冰使徒',
    gold: 1,
    constgold: 1,
    notes: '测试记录',
    video: 'https://example.com/video.mp4',
    submitTime: new Date().toISOString()
  })
};

// 测试提交记录函数
console.log('\n测试提交记录函数...');
submitRecordFunction.handler(submitRecordEvent, {})
  .then(result => {
    console.log('提交记录响应:', result);
    console.log('响应体:', JSON.parse(result.body));
  })
  .catch(error => {
    console.error('提交记录失败:', error);
  });
