// create new <p> element
var paragraph = document.createElement('p');
var node = document.createTextNode('new paragraph');

paragraph.appendChild(node);

var element = document.getElementById('div1');

element.appendChild(paragraph);