console.log('Hello DOM!');

const para = document.getElementById('firstPara');
console.log('para:', para);

const allParagraphs = document.getElementsByTagName("p");

const allLarger = document.getElementsByClassName('larger');

const firstPara = document.querySelector('#firstPara');

const allStrongs = document.querySelectorAll('strong');
console.log(allStrongs);

const allLargerClasses = document.querySelectorAll('.larger');
console.log(allLargerClasses);
