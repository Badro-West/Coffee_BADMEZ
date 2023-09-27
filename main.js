window.addEventListener('scroll',function(){
    var h =document.querySelector('header');
    var s=document.querySelector('.socialMedia ul li a i');
    var v=document.querySelector('.verticalLine');
    h.classList.toggle('sticky' , window.scrollY > 0);
    s.classList.toggle('color-Echange' , window.scrollY > 0);
    v.classList.toggle('color' , window.scrollY > 0);
    var second=document.querySelector('.fa-pinterest-p');
    second.classList.toggle('second' , window.scrollY > 0);
    var third=document.querySelector('.fa-facebook-f');
    third.classList.toggle('third' , window.scrollY > 0);
    var forth=document.querySelector('.fa-heart');
    forth.classList.toggle('forth' , window.scrollY > 0);
});


function toggleMenu(){
    const mt = document.querySelector('.menuIcon');
    const ng = document.querySelector('.navigation');
    mt.classList.toggle('active');
    ng.classList.toggle('active');
}


// Get the current year and update the content of the footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;