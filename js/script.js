let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height =  sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')

};


// SCROLL REVEAL

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.about-img-grid, .about-content', { origin: 'top' });
ScrollReveal().reveal('.skills-left, .skills-right', { origin: 'top' });
ScrollReveal().reveal('.timeline-section', { origin: 'top' });





// TYPED JS

const typed = new Typed('.multiple-text', {
    strings: ['Game Developer', 'Game Dev Indie', 'Front End'],
    typeSpeed: 70,
    backSpeed: 70,
    backDeelay: 1000,
    loop: true,
})




