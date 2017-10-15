function $(id){
  return document.getElementById(id);
}

function $$(tag,index){
  index = (typeof index !== 'undefined') ?  index : 0;
  return document.getElementsByTagName(tag)[index];
}

function create(tag){
  return document.createElement(tag);
}
