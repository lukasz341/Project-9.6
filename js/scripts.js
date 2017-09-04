var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	var element = document.createElement('li');
	var lista = document.getElementsByTagName('li');
	element.innerHTML = 'item '+lista.length;
	list.appendChild(element);
});