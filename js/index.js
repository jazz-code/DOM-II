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

// IMG double-click event
const IMG = document.querySelector('.content-section img');
IMG.addEventListener('dblclick', event => {
    event.target.style.transform = "scale(1.3)"
})
IMG.addEventListener('click', event => {
    event.target.style.transform = "none"
})

console.log(IMG)