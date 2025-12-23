# 原神幽境危战难度六通关记录系统

这是一个用于记录和展示原神幽境危战难度六通关记录的系统，支持玩家提交记录、管理员审核记录，并提供排名展示功能。

## 项目结构

```
├── upload.html          # 完整的记录提交页面
├── simple_upload.html   # 简化的记录提交页面
├── ranking.html         # 排名展示页面
├── data.js              # 数据模型和操作
├── server.js            # 本地Node.js服务器（开发用）
├── data.json            # 记录数据文件
├── netlify/             # Netlify配置目录
│   └── functions/       # Netlify Functions目录
│       └── submit-record.js  # 提交记录的云函数
├── netlify.toml         # Netlify配置文件
└── package.json         # 项目依赖
```

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地服务器

```bash
npm start
```

服务器将在 `http://localhost:3000` 上运行。

### 3. 访问页面

- 提交记录页面：`http://localhost:3000/upload.html`
- 简化提交页面：`http://localhost:3000/simple_upload.html`
- 排名展示页面：`http://localhost:3000/ranking.html`

## Netlify部署

### 1. 准备工作

- 确保已安装Git
- 创建GitHub/GitLab/Bitbucket仓库并将项目推送到远程仓库
- 注册Netlify账号

### 2. 部署步骤

1. 登录Netlify控制台
2. 点击"New site from Git"
3. 选择你的代码仓库
4. 配置部署设置：
   - Build command: 留空（静态网站不需要构建）
   - Publish directory: 留空（默认使用根目录）
5. 点击"Deploy site"

### 3. 部署完成

部署完成后，你可以通过Netlify提供的URL访问你的网站。

## Netlify Functions使用说明

本项目使用Netlify Functions替代原来的Node.js服务器，实现了记录提交功能。

### 函数说明

- `submit-record`: 处理记录提交请求，将新记录添加到`data.json`文件中，默认状态为"pending"（待审核）。

### API端点

- POST `/api/submit-record`: 提交新的通关记录

### 环境变量

本项目不需要特殊的环境变量配置。

## 数据文件

- `data.json`: 存储所有通关记录，包括已审核和待审核的记录。
- 记录状态：
  - `pending`: 待审核
  - `approved`: 已审核

## 常见问题

### Q: 在Netlify上部署后，提交记录功能不工作怎么办？

A: 请检查以下几点：
1. 确保Netlify Functions已正确部署
2. 检查浏览器控制台是否有网络错误
3. 确认`data.json`文件有正确的读写权限

### Q: 如何审核待审核的记录？

A: 目前需要手动编辑`data.json`文件，将记录的`status`字段从`pending`改为`approved`。

### Q: 如何在本地测试Netlify Functions？

A: 可以使用Netlify CLI工具进行本地测试：

```bash
npm install -g netlify-cli
netlify dev
```

## 技术栈

- HTML5, CSS3, JavaScript
- Bootstrap 4
- Font Awesome
- Chart.js
- Node.js, Express (本地开发)
- Netlify Functions (部署)

## 许可证

MIT