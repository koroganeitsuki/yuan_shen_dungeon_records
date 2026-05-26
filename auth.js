// 用户认证模块
(function() {
    // 全局变量
    window.Auth = {
        currentUser: null,
        authToken: localStorage.getItem('authToken'),
        accountValid: false
    };

    // 检查登录状态
    async function checkLoginStatus() {
        try {
            const response = await fetch('/api/check-login', {
                headers: {
                    'Authorization': Auth.authToken || ''
                }
            });
            const data = await response.json();
            if (data.success && data.loggedIn) {
                Auth.currentUser = {
                    username: data.username,
                    isAdmin: data.isAdmin
                };
            } else {
                Auth.currentUser = null;
                Auth.authToken = null;
                localStorage.removeItem('authToken');
            }
            return data;
        } catch (error) {
            console.error('检查登录状态失败:', error);
            return { success: false, loggedIn: false };
        }
    }

    // 检查账号有效性
    async function checkAccountValidity() {
        try {
            const response = await fetch('/api/check-account-validity', {
                headers: {
                    'Authorization': Auth.authToken || ''
                }
            });
            const data = await response.json();
            if (data.success && data.loggedIn) {
                Auth.currentUser = {
                    username: data.username,
                    isAdmin: data.isAdmin
                };
                Auth.accountValid = data.valid;
            } else {
                Auth.currentUser = null;
                Auth.accountValid = false;
            }
            return data;
        } catch (error) {
            console.error('检查账号有效性失败:', error);
            return { success: false, loggedIn: false, valid: false };
        }
    }

    // 更新登录UI
    function updateLoginUI() {
        const loginText = document.getElementById('login-text');
        const loginBtn = document.getElementById('login-btn');
        const mobileLoginText = document.getElementById('mobile-login-text');
        const mobileLoginBtn = document.getElementById('mobile-login-btn');

        if (Auth.currentUser) {
            if (loginText) loginText.textContent = `欢迎, ${Auth.currentUser.username}`;
            if (loginBtn) {
                loginBtn.textContent = '退出登录';
                loginBtn.onclick = logout;
            }
            if (mobileLoginText) mobileLoginText.textContent = `欢迎, ${Auth.currentUser.username}`;
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = '退出';
                mobileLoginBtn.onclick = logout;
            }
        } else {
            if (loginText) loginText.textContent = '未登录';
            if (loginBtn) {
                loginBtn.textContent = '登录';
                loginBtn.onclick = openAuthModal;
            }
            if (mobileLoginText) mobileLoginText.textContent = '未登录';
            if (mobileLoginBtn) {
                mobileLoginBtn.textContent = '登录';
                mobileLoginBtn.onclick = openAuthModal;
            }
        }
    }

    // 登录
    async function login(username, password) {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (data.success) {
                Auth.authToken = data.token;
                localStorage.setItem('authToken', Auth.authToken);
                Auth.currentUser = {
                    username: data.username,
                    isAdmin: data.isAdmin
                };
                updateLoginUI();
                closeAuthModal();
                return { success: true };
            } else {
                return { success: false, message: data.message || '登录失败' };
            }
        } catch (error) {
            console.error('登录失败:', error);
            return { success: false, message: '登录失败，请稍后重试' };
        }
    }

    // 注册
    async function register(username, password, confirmPassword) {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, confirmPassword })
            });
            const data = await response.json();
            if (data.success) {
                return { success: true };
            } else {
                return { success: false, message: data.message || '注册失败' };
            }
        } catch (error) {
            console.error('注册失败:', error);
            return { success: false, message: '注册失败，请稍后重试' };
        }
    }

    // 退出登录
    async function logout() {
        try {
            await fetch('/api/logout', {
                method: 'POST',
                headers: {
                    'Authorization': Auth.authToken || ''
                }
            });
        } catch (error) {
            console.error('退出登录失败:', error);
        } finally {
            Auth.currentUser = null;
            Auth.authToken = null;
            localStorage.removeItem('authToken');
            Auth.accountValid = false;
            updateLoginUI();
            if (typeof onLogout === 'function') {
                onLogout();
            }
        }
    }

    // 重置账号
    async function resetAccount() {
        try {
            const response = await fetch('/api/reset-account', {
                method: 'POST',
                headers: {
                    'Authorization': Auth.authToken || ''
                }
            });
            const data = await response.json();
            if (data.success) {
                return { success: true };
            } else {
                return { success: false, message: data.message || '重置失败' };
            }
        } catch (error) {
            console.error('重置账号失败:', error);
            return { success: false, message: '重置失败，请稍后重试' };
        }
    }

    // 打开认证弹窗
    function openAuthModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            // 检查弹窗的显示方式（upload.html 使用 active class，ranking.html 使用 hidden/flex）
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            } else {
                modal.classList.add('active');
            }
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            if (loginForm) loginForm.style.display = 'block';
            if (registerForm) registerForm.style.display = 'none';
        }
    }

    // 关闭认证弹窗
    function closeAuthModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            if (modal.classList.contains('flex')) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            } else {
                modal.classList.remove('active');
            }
        }
    }

    // 切换到注册表单
    function switchToRegister() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    }

    // 切换到登录表单
    function switchToLogin() {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }

    // 初始化认证模块
    async function initAuth() {
        await checkLoginStatus();
        updateLoginUI();
        return Auth.currentUser;
    }

    // 暴露到全局
    window.Auth.checkLoginStatus = checkLoginStatus;
    window.Auth.checkAccountValidity = checkAccountValidity;
    window.Auth.updateLoginUI = updateLoginUI;
    window.Auth.login = login;
    window.Auth.register = register;
    window.Auth.logout = logout;
    window.Auth.resetAccount = resetAccount;
    window.Auth.openAuthModal = openAuthModal;
    window.Auth.closeAuthModal = closeAuthModal;
    window.Auth.switchToRegister = switchToRegister;
    window.Auth.switchToLogin = switchToLogin;
    window.Auth.initAuth = initAuth;

    // 页面加载时自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAuth);
    } else {
        initAuth();
    }
})();