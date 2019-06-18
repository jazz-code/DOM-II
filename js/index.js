// Header mouseenter / mouseleave IMG event
const headerImg = document.querySelector('header img');

headerImg.addEventListener('mouseenter', event => {
    headerImg.style.border = '2px solid red'})
headerImg.addEventListener('mouseleave', event => {
    headerImg.style.border = 'none'
})

// Nav click event
const nav = document.querySelector('header nav');

nav.addEventListener('click', event => {
    event.target.textContent;
    
    const title = document.querySelector('h1.logo-heading');
    title.textContent = event.target.textContent
})

// Nav scroll event
const navA = document.querySelector('header nav a')[0];
IMG.addEventListener('dblclick', event => {
    IMG.classList.toggle('large')
})