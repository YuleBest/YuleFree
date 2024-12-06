document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (menuToggle && mobileNav && menuOverlay) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            menuToggle.innerHTML = mobileNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
        
        menuOverlay.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    }
    
    // 添加页面类型标识
    const path = window.location.pathname;
    let lastScrollY = window.scrollY;
    
    if (path === '/' || path === '/index.html') {
        document.body.classList.add('home');
        
        // 只在首页监听滚动
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.site-header');
            if (!header) return;
            
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // 控制顶栏显示/隐藏
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollY = window.scrollY;
        });
    } else {
        // 非首页的滚动监听
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.site-header');
            if (!header) return;
            
            // 控制顶栏显示/隐藏
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollY = window.scrollY;
        });
    }

    // 处理订阅表单提交
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的订阅！');
        });
    }

    // 为导航链接添加活跃状态
    const navLinks = document.querySelectorAll('.nav-links a');  // 获取所有导航链接
    if (navLinks.length > 0) {  // 确保存在导航链接
        const currentPath = window.location.pathname;  // 获取当前页面路径
        
        navLinks.forEach(link => {
            // 根据当前路径设置活跃状态
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
            
            // 点击时更新活跃状态
            link.addEventListener('click', function() {
                navLinks.forEach(l => l.classList.remove('active'));  // 移除所有链接的活跃状态
                this.classList.add('active');  // 为当前点击的链接添加活跃状态
            });
        });
    }
}); 