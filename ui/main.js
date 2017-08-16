console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'I\'m Khadija';
//move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.margin-left = '1000px';
};