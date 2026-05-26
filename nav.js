// 公共导航栏模块
(function() {
    // 导航菜单项配置
    const navItems = [
        { name: '首页', href: 'index.html' },
        { name: '排行榜', href: 'ranking.html' },
        { name: '上传记录', href: 'upload.html' },
        { name: '投票审核', href: 'vote.html' },
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
            <nav class="bg-dark bg-opacity-80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
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
    function initNavbar() {
        // 等待Auth模块加载完成
        const checkAuthLoaded = setInterval(() => {
            if (typeof Auth !== 'undefined') {
                clearInterval(checkAuthLoaded);
                renderNavbar();
                updateNavbarLoginUI();
            }
        }, 50);
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