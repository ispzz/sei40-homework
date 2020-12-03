console.log('howdy')

para = $('h1')
console.log(`para`, para)

para.css('background-color', 'blue');

para.css({fontSize: 'pt', fontFamily: 'Comic Sans MS'})


const $bill = $('#mainImage');

console.log('$bill', $bill)
const billURL= $bill.attr('src');

console.log('bill image src URL:', billURL)



const pContents = para.html()
console.log('first P tag contents', pContents)
para.html ('hey fiends')

const $linkTag = $('<a>');
$linkTag.html('I SAID HI');
$linkTag.css('color', 'red');
$linkTag.attr('href', 'guestbook.html');

para.append($linkTag)




const allParaTags= $('p');
allParaTags.html('all the Same now');
allParaTags.css('color', 'green')

const allParaContents= allParaTags.html();
console.log('All contents', allParaContents)
