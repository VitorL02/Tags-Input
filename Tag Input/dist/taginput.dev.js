"use strict";

var tags = []; //guarda a tag 

var tagContainer = document.querySelector('.tag-container');
var input = tagContainer.querySelector('input');
input.addEventListener('keyup', addTags); //Escuta a função e manda argumentos,faz quando o usuario apertar enter ele pegue o texto

function addTags(event) {
  var keyPressIsEnter = event.key == 'Enter';

  if (keyPressIsEnter) {
    //separa cada tag por  virgula
    input.value.split(',').forEach(function (tag) {
      if (tag) {
        tags.push(tag.trim());
      }
    });
    updateTags();
    input.value = '';
  }
}

function updateTags() {
  clearTags(); //tags.slice().reverse() Arruma a ordem das tags,divide o array com o slice

  tags.slice().reverse().forEach(function (tag) {
    tagContainer.prepend(createTag(tag));
  });
}

function createTag(tag) {
  //Cria a tag,cria a div,cria a span
  var div = document.createElement('div');
  div.classList.add('tag');
  var span = document.createElement('span');
  span.innerHTML = tag;
  div.append(span); //cria  a remoção da tag

  var i = document.createElement('i');
  i.classList.add('close');
  i.setAttribute('data-id', tag);
  i.onclick = removeTag;
  span.append(i);
  return div;
}

function removeTag(event) {
  var buttonX = event.currentTarget;
  var id = buttonX.dataset.id;
  var index = tags.indexOf(id);
  tags.splice(index, 1);
  updateTags();
}

function clearTags() {
  tagContainer.querySelectorAll('.tag').forEach(function (tagElement) {
    return tagElement.remove();
  });
}