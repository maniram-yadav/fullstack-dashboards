function setValue(element){
  let text = element.innerText;
  let value = element.getAttribute('value');
  console.log(text,value);
  let elements = document.getElementsByClassName('value');
  let el = elements[0];
  el.innerText = text;
  el.setAttribute('value',value);

}


function toggleOption(name){
  console.log(event.target);
  let elements = document.getElementsByClassName(name);
  let dropdowns = document.getElementsByClassName('dropdown');
  console.log(dropdowns[0].classList)
  dropdowns[0].classList.toggle("shadow-md");
  let option = elements[0];
  console.log(option);
  option.classList.toggle('hidden')
}