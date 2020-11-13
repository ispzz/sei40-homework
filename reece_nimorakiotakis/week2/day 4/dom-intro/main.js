// document.querySelector('body').style.fontFamily="Arial, sans-serif";
// document.querySelector('#nickname').innerHTML="Reece";
// document.querySelector('#favorites').innerHTML="Food";
// document.querySelector('#hometown').innerHTML="Melbourne";

console.log('About Me');

// document.body.style.fontFamily('Arial, sans-serif');


var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }]

  const newParagraph = document.createElement('p');


for(let i=0; i < books.length; i++){
  newParagraph.innerHTML= [i]
console.log(newParagraph)
}
