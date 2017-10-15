var body = $$('body');

function init(){

  var container = create('div');

  var firstPrompt = create('p').appendChild(document.createTextNode(data['level-1'].prompt));

  var firstSelect = create('select');
  firstSelect.name = 'firstSelect';
  firstSelect.addEventListener("change",function(event){updateSelects(event);}, true);

  for(var x = 0; x < data['level-1'].select.options.length; x++){

    var option = create('option');
    option.value = data['level-1'].select.options[x].value;
    option.appendChild(document.createTextNode(data['level-1'].select.options[x].label));
    firstSelect.appendChild(option);

  }

  container.appendChild(firstPrompt);
  container.appendChild(firstSelect);
  body.appendChild(container);

}


function updateSelects(event){

  var selectsOnPage = document.getElementsByTagName('select').length;
  //console.log(selectsOnPage);

  //console.log(event.target === $$('select', 0));

  //if the select changed was the last select on the page
  if(event.target === $$('select', selectsOnPage-1)){

    createSelect(selectsOnPage+1, event.target.value);

  }else{

    body.removeChild($$('div', document.getElementsByTagName('div').length-1));
    var changeEvent = new Event('change');
    event.target.dispatchEvent(changeEvent);
  }



}

function createSelect(level, key){

  var container = create('div');

  var prompt = create('p').appendChild(document.createTextNode(data['level-'+level][key].prompt));

  var select = create('select');
  //select.name = 'firstSelect';
  select.addEventListener("change",function(event){updateSelects(event);}, true);

  for(var x = 0; x < data['level-'+level][key].select.options.length; x++){

    var option = create('option');
    option.value = data['level-'+level][key].select.options[x].value;
    option.appendChild(document.createTextNode(data['level-'+level][key].select.options[x].label));
    select.appendChild(option);

  }

  container.appendChild(prompt);
  container.appendChild(select);
  body.appendChild(container);

}
