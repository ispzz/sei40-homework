console.log('DOM with jQuery');

const $para = $('#firstPara');
console.log('para', $para);

$para.css('background-color', 'white')
const pContents = $para.html();
console.log(pContents);

$para.html('HEY HEY');

// Create a new a tag and add it as a child to the above p tag that we have already retrieved

const $linkTag = $('<a>');
$linkTag.html('I SAID SIGN THE GUESTBOOK');
$linkTag.css('color', 'red');
$linkTag.attr('href', 'guestbook.html')

$para.append($linkTag);

// const $fade = $('#murray').fadeOut(5000);

const $h1Change = $('h1');

$h1Change.css('color', 'blue');

// bill image

const $bill = $('#murray')

const billURL = $bill.attr('src');
console.log('bill image src URL:', billURL);

$bill.attr('src', 'http://placekitten.com/300/200')
