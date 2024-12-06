document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (!header) return;
        
        // 只控制背景色
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 为导航链接添加活跃状态
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length > 0) {
        const currentPath = window.location.pathname;
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // 移除开头的 / 以匹配相对路径
            const cleanPath = currentPath.replace(/^\//, '');
            const cleanHref = href.replace(/^\//, '');
            
            if (cleanPath.startsWith(cleanHref) && cleanHref !== '') {
                link.classList.add('active');
            }
        });
    }
}); 