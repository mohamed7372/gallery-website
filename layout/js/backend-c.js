var show = false;

var btnAdd = document.getElementById('add');
var windowUp = document.getElementById('windowUp');

btnAdd.onclick = function(){
    windowUp.style.display = 'block';
}

windowUp.onclick = function(){
    windowUp.style.display = 'none';
}