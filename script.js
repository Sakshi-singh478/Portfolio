let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll =()=>{
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({ 
    //reset: true ,
    distance : '80px',
    duration : 2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin:'botttom' });
