let userHeader = document.getElementById('user-header');
let subButton = document.getElementById('sub');
let body = document.getElementsByTagName('body');
let subBanner = document.getElementById('subBanner')
var userBanner = document.getElementById('banner');
let photos = document.getElementById('photos');
let nav = document.getElementById('nav');
let userPhoto = document.getElementById('user-photo');
let subMainButton = document.getElementById('subMainButton');

function deleteBlur() {
    alert()
}

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 400) 
        userHeader.style = 'top: -10px';
    else 
            userHeader.style = 'top: -100px';
});

userHeader.addEventListener('click', function() {
    window.scrollTo(0, 0)
})

subButton.addEventListener('click', function() {
    userBanner.style = 'filter: blur(5px);';
    nav.style = 'filter: blur(5px);';
    photos.style = 'filter: blur(5px);';
    userBanner.style = 'filter: blur(5px);';
    subBanner.style = 'top: 14%;'
    document.body.style = 'overflow-y: hidden;';
})

subMainButton.addEventListener('click', function() {
    userBanner.style = 'filter: blur(0px);';
    nav.style = 'filter: blur(0px);';
    photos.style = 'filter: blur(0px);';
    userBanner.style = 'filter: blur(0px);';
    subBanner.style = 'top: -60%;'
    document.body.style = 'overflow-y: none;';
})

