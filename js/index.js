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
    event.stopPropagation();
    const title = document.querySelector('h1.logo-heading');
    title.textContent = event.target.textContent
})
nav.addEventListener('mouseleave', event => {
    const title = document.querySelector('h1.logo-heading');
    title.textContent = "Fun Bus!"
})


// IMG double-click event
const IMG = document.querySelector('.content-section img');
IMG.addEventListener('dblclick', event => {
    event.target.style.transition = "transform .6s"
    event.target.style.transform = "scale(1.3)"
})
IMG.addEventListener('click', event => {
    event.target.style.transform = "none"
})

// wheel scroll event
const bottomIMG = document.querySelector('.content-destination img')
let scale = -1;
bottomIMG.addEventListener('wheel', zoom => {
    zoom.preventDefault();

    scale += zoom.deltaY * -0.01;
    //Restrict Scale
    scale = Math.min(Math.max(.125, scale), 4);
    //Applies scale transform
    bottomIMG.style.transform = `scale(${scale})`
    bottomIMG.onwheel = zoom;
})

bottomIMG.addEventListener('mouseleave', event => {
    bottomIMG.style.transform = "none"
})

// keydown event
const keyDown = document.addEventListener('keydown', key => {
    if (key.keyCode = true) {
        alert('What do you need help with?')
    }
})

// select event
const select = document.querySelector('p');
select.addEventListener('select', event => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    select.textContent = `You selected: ${selection}`;
})
console.log(select)

// copy event
