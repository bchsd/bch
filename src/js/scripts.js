// This file is intentionally blank
// Use this file to add JavaScript to your project

// Close menu after picking option
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        
        // Only trigger the close animation if the mobile menu is currently open
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            bsCollapse.hide();
        }
    });
});