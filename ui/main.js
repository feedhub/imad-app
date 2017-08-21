console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'I\'m Khadija';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,30);
};
var marginRight = 10;
function moveLeft(){
    marginRight = marginRight + 2;
    img.style.marginRight = marginRight + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveLeft,30);
};
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,30);
};