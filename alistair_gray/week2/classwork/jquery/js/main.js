const allLinks = document.querySelectorAll('a');
console.log(allLinks)

for (let i=0; i < allLinks.length; i++){
  const currentLink = allLinks[i];
  console.log(i, currentLink.href);

  const videoUrl    = currentLink.href;
  const thumb       = youtube.generateThumbnailUrl(videoUrl)
  console.log(thumb);
  const newImage    = document.createElement('img')
  newImage.src      = thumb;
  currentLink.appendChild(newImage);
}
