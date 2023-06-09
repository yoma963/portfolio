let header = document.querySelector('.header');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

let menuIcon = document.querySelector('#icon');
let navbar = document.querySelector('.navbar');

/* MENU ICON NAVBAR */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('x-icon');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    /* SCROLL NAVBAR ACTIVE LINKS */
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec. offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })

    /* STICKY NAVBAR */
    header.classList.toggle('sticky', window.scrollY > 20);

    /* HIDE MENU WHEN CLICK ON ONE OF THESE (ON MOBILE) */
    menuIcon.classList.remove('x-icon');
    navbar.classList.remove('active');
};

/* SCROLL REVEAL */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'top', mobile: false });
ScrollReveal().reveal('.form-container, .about .button', { origin: 'bottom', mobile: false });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.right-container', { origin: 'right', mobile: false });
ScrollReveal().reveal('.home-content h3, .home-content p', { origin: 'right' });
ScrollReveal().reveal('.left-container', { origin: 'left', mobile: false });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });