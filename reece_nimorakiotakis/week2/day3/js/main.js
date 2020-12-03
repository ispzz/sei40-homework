console.log('hey boys')

var currentLink = document.querySelectorAll('a')
var myLinks = []

for (let i = 0; i < currentLink.length; i++) {
console.log(youtube.generateThumbnailUrl(currentLink[i].href))
var img = document.createElement('img');
const thumbnailURL= youtube.generateThumbnailUrl(currentLink[i].href)
const currentlink = myLinks [i]


img.src=thumbnailURL;
currentLink.appendChild('img')

}
