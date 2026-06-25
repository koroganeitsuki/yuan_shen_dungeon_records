// 公共导航栏模块
(function() {
    // 导航菜单项配置
    const navItems = [
        { name: '首页', href: 'index.html' },        
        { name: '排行榜', href: 'ranking.html' },
        { name: '上传记录', href: 'upload.html' },
        { name: '投票审核', href: 'vote.html' },
        { name: '讨论区', href: 'discuss.html' },
        { name: '贡献榜', href: 'contribution.html' },
        { name: '用户中心', href: 'user.html' },
        { name: '管理员', href: 'admin.html' }
    ];

    // 获取当前页面路径
    function getCurrentPage() {
        const path = window.location.pathname;
        return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    }

    // 生成导航栏HTML
    function generateNavbar() {
        const currentPage = getCurrentPage();
        const isLoggedIn = Auth && Auth.currentUser;
        
        // 桌面端导航链接
        let desktopNavLinks = '';
        navItems.forEach(item => {
            const isActive = currentPage === item.href;
            const classes = isActive 
                ? 'text-genshin-yellow font-medium' 
                : 'text-gray-400 hover:text-genshin-yellow transition-colors';
            desktopNavLinks += `<a href="${item.href}" class="${classes}">${item.name}</a>`;
        });

        // 移动端导航链接
        let mobileNavLinks = '';
        navItems.forEach(item => {
            const isActive = currentPage === item.href;
            const classes = isActive 
                ? 'text-genshin-yellow font-medium py-2' 
                : 'text-gray-400 hover:text-genshin-yellow transition-colors py-2';
            mobileNavLinks += `<a href="${item.href}" class="${classes}">${item.name}</a>`;
        });

        const navbarHTML = `
            <nav class="fixed w-full top-0 bg-dark bg-opacity-80 backdrop-blur-md border-b border-gray-800 z-50">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <div class="flex items-center space-x-4">
                            <a href="index.html" class="flex items-center space-x-2">
                                <img src="https://bbs-static.miyoushe.com/static/2025/06/16/46c0ca54ffaa4664f05efe7932d0bdfb_4298836572782376517.png" alt="原神幽境危战" class="w-8 h-8">
                                <span class="text-xl font-bold text-genshin-yellow">原神幽境危战</span>
                            </a>
                            <span class="text-gray-400 text-sm">难度六通关记录</span>
                        </div>
                        
                        <div class="hidden md:flex items-center space-x-6">
                            ${desktopNavLinks}
                        </div>
                        
                        <!-- 登录状态 -->
                        <div class="hidden md:flex items-center space-x-4">
                            <div id="login-status" class="text-gray-400">
                                <span id="login-text">未登录</span>
                                <button id="login-btn" class="ml-2 px-3 py-1 bg-genshin-yellow text-dark rounded-md text-sm font-medium hover:bg-yellow-300 transition-colors">
                                    登录
                                </button>
                            </div>
                        </div>
                        
                        <div class="md:hidden">
                            <button id="mobile-menu-btn" class="text-gray-400 hover:text-genshin-yellow">
                                <i class="fa fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- 移动端菜单 -->
                <div id="mobile-menu" class="md:hidden bg-dark bg-opacity-95 backdrop-blur-md border-b border-gray-800 hidden">
                    <div class="container mx-auto px-4 py-2">
                        <div class="flex flex-col space-y-3 py-3">
                            ${mobileNavLinks}
                        </div>
                        <!-- 移动端登录状态 -->
                        <div class="pt-3 border-t border-gray-700">
                            <div id="mobile-login-status" class="flex items-center justify-between">
                                <span id="mobile-login-text" class="text-gray-400">未登录</span>
                                <button id="mobile-login-btn" class="px-3 py-1 bg-genshin-yellow text-dark rounded-md text-sm font-medium">
                                    登录
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- 导航栏占位元素，防止内容被固定导航栏遮挡 -->
            <div class="h-16 md:h-20"></div>
            
            <!-- 统一登录/注册弹窗 -->
            <div id="auth-modal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 hidden">
                <div class="bg-gray-900 rounded-lg w-full max-w-md mx-4 overflow-hidden">
                    <div class="flex justify-between items-center p-4 border-b border-gray-700">
                        <h2 class="text-xl font-bold text-white">用户登录</h2>
                        <button onclick="Auth.closeAuthModal()" class="text-gray-400 hover:text-white">
                            <i class="fa fa-times text-xl"></i>
                        </button>
                    </div>
                    <div class="p-6">
                        <form id="login-form" class="space-y-4">
                            <div>
                                <label class="block text-gray-300 text-sm font-medium mb-2">用户名</label>
                                <input type="text" id="login-username" class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-genshin-yellow" placeholder="请输入用户名" required>
                            </div>
                            <div>
                                <label class="block text-gray-300 text-sm font-medium mb-2">密码</label>
                                <input type="password" id="login-password" class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-genshin-yellow" placeholder="请输入密码" required>
                            </div>
                            <button type="button" onclick="Auth.login(document.getElementById('login-username').value, document.getElementById('login-password').value).then(result => { if(result.success) { alert('登录成功'); window.location.reload(); } else alert(result.message); })" class="w-full bg-gradient-to-r from-genshin-yellow to-yellow-400 text-dark font-bold py-2 rounded-md hover:from-yellow-400 hover:to-genshin-yellow transition-all">
                                登录
                            </button>
                            <p class="text-center text-gray-400 text-sm">
                                还没有账号？<a href="#" onclick="Auth.switchToRegister(); return false;" class="text-genshin-yellow hover:underline">立即注册</a>
                            </p>
                        </form>
                        
                        <form id="register-form" class="space-y-4" style="display: none;">
                            <div>
                                <label class="block text-gray-300 text-sm font-medium mb-2">用户名</label>
                                <input type="text" id="register-username" class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-genshin-yellow" placeholder="请输入用户名（3-20字符）" required>
                            </div>
                            <div>
                                <label class="block text-gray-300 text-sm font-medium mb-2">密码</label>
                                <input type="password" id="register-password" class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-genshin-yellow" placeholder="请输入密码（至少6位）" required>
                            </div>
                            <div>
                                <label class="block text-gray-300 text-sm font-medium mb-2">确认密码</label>
                                <input type="password" id="register-confirm-password" class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-genshin-yellow" placeholder="请再次输入密码" required>
                            </div>
                            <button type="button" onclick="Auth.register(document.getElementById('register-username').value, document.getElementById('register-password').value, document.getElementById('register-confirm-password').value).then(result => { if(result.success) { alert('注册成功，请登录'); Auth.switchToLogin(); } else alert(result.message); })" class="w-full bg-gradient-to-r from-genshin-yellow to-yellow-400 text-dark font-bold py-2 rounded-md hover:from-yellow-400 hover:to-genshin-yellow transition-all">
                                注册
                            </button>
                            <p class="text-center text-gray-400 text-sm">
                                已有账号？<a href="#" onclick="Auth.switchToLogin(); return false;" class="text-genshin-yellow hover:underline">立即登录</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        `;

        return navbarHTML;
    }

    // 渲染导航栏
    function renderNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = generateNavbar();
            
            // 绑定移动端菜单事件
            document.getElementById('mobile-menu-btn').addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            });
            
            // 导航链接点击关闭菜单
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    document.getElementById('mobile-menu').classList.add('hidden');
                });
            });
        }
    }

    // 更新登录状态显示
    function updateNavbarLoginUI() {
        const loginText = document.getElementById('login-text');
        const loginBtn = document.getElementById('login-btn');
        const mobileLoginText = document.getElementById('mobile-login-text');
        const mobileLoginBtn = document.getElementById('mobile-login-btn');

        if (Auth && Auth.currentUser) {
            if (loginText) loginText.textContent = `欢迎, ${Auth.currentUser.username}`;
            if (loginBtn) {
                loginBtn.textContent = '退出登录';
                loginBtn.onclick = Auth.logout;
            }
            if (mobileLoginText) mobileLoginText.textContent = `欢迎, ${Auth.currentUser.username}`;
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = '退出';
                mobileLoginBtn.onclick = Auth.logout;
            }
        } else {
            if (loginText) loginText.textContent = '未登录';
            if (loginBtn) {
                loginBtn.textContent = '登录';
                loginBtn.onclick = Auth.openAuthModal;
            }
            if (mobileLoginText) mobileLoginText.textContent = '未登录';
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = '登录';
                mobileLoginBtn.onclick = Auth.openAuthModal;
            }
        }
    }

    // 页面加载时渲染导航栏
    async function initNavbar() {
        // 渲染导航栏（不依赖Auth模块）
        renderNavbar();
        // 如果Auth模块存在，等待初始化完成后更新登录状态
        if (typeof Auth !== 'undefined') {
            await Auth.initAuth();
            updateNavbarLoginUI();
        }
    }

    // 暴露到全局
    window.Navbar = {
        renderNavbar,
        updateNavbarLoginUI,
        initNavbar
    };

    // 页面加载时自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
})();