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
    // 返回健康状态
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: '服务器正常运行',
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('处理健康检查请求失败:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: '服务器异常'
      })
    };
  }
};