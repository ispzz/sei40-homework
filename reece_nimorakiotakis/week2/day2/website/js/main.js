
var i = 0;
var txt = "Wall grew up in Los Angeles and then Bremerton, Washington, before starting higher education at Seattle Pacific University in 1976, majoring in chemistry and music and later pre-medicine with a hiatus of several years working in the university's computing center before graduating with a bachelor's degree in Natural and artificial languages. graduate school at the university  california, berkeley, wall and his wife were studying linguistics with the intention  finding an unwritten language, perhaps  africa, and creating a writing system  it. dhey would then use this  writing system to translate various texts into the language, among them the bible.due to health reasons these plans were cancelled, and they remained  the united states, where wall instead joined the nASA jet propulsion laboratory after he finished graduate school. wall is an active member  the  life, church  the nazarene ...................................................................... ...................................//larry is best known creating perl//.......................... ................................................................  ............................//larry loves cats//.................................................................................. "


var speed = 1;
var firstpop = document.querySelector('.clicker')
var button1 = document.querySelector('.popup1')
var button2 = document.querySelector('.popup2')
var myButton = document.querySelector('.greenScreen')

myButton.addEventListener('click', function typeWriter() {
  if (i < txt.length) {

    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}

})



firstpop.addEventListener('click', function typeWriter() {
console.log('idiot')

if (button1.style.opacity == 0){
  console.log('1')
  button1.style.opacity = 1
  button2.style.opacity = 0
}

else if (button1.style.opacity == 1){
  console.log('2')
  button1.style.opacity = 0
  button2.style.opacity = 1}



})
