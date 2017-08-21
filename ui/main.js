console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'I\'m Khadija';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = MarginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
};
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};