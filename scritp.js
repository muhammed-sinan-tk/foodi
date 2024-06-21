document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbar-nav');
    const togglerIcon = navbarToggler.querySelector('i');

    navbarToggler.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
        if (navbarNav.classList.contains('show')) {
            togglerIcon.classList.remove('bi-list');
            togglerIcon.classList.add('bi-x');
        } else {
            togglerIcon.classList.remove('bi-x');
            togglerIcon.classList.add('bi-list');
        }
    });

    document.addEventListener('click', function (event) {
        if (!navbarNav.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarNav.classList.remove('show');
            togglerIcon.classList.remove('bi-x');
            togglerIcon.classList.add('bi-list');
        }
    });
});
