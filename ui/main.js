console.log('Loaded!');
var element = document.getElementById('main-text'
);

element.innerHTML = 'I\'m Khadija';

//move the image
var img = document.getElementById('modi');
img.onclick = function(){
    img.style.marginleft = '100px';
};