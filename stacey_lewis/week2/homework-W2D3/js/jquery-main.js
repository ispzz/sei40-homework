console.log('jQuery animated cat');
console.log('click the go button to get the coin');
console.log('click the cat to go into the castle');
//on click, appear (do last)
//walk to the right
//when it gets near the coin, go up and right 2 x height, then right and down 2 x height (arc)
//on overlap with coin, coin should go up out of the screen
// turn around and go to castle
// stop at castle, shrink & disappear and flash background yellow red.
// flash up message to user.


  //walk to the right
  $('#go').on('click', function(){
    $('#catID').animate({left: "1200px"},3000, function () {
      $('#catID').animate({top: "-=200px"},{duration: 1000, queue: true});
      $('#catID').animate({left: "+=200px"},{duration: 1000, queue: false});
        $('#catID').animate({top: "+=200px"},{duration: 1000, queue: true});
        $('#catID').animate({left: "+=200px"},{duration: 1000, queue: false});
        $('#coin').delay(1800).animate({top: "-1200px"},1000, function () {
          $('#catID').css({'transform': "rotateY(180deg)"});
          $('#catID').animate({left: "-=650px"},2000)
      });
    }); //first jump
  }); //end top function
    // $('#background').toggle()


  $('#catID').on('click', function () {
      $(this).css({
        'transition-property': "width",
        "transition-duration": "5s",
        'width': '100px'});
      $(this).animate({top:"+=180px"},{duration:3000,queue:false},
       $('#overlay').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500));
      // $('#hi-cat').fadeIn(1000);
      }); //end width css
//
// $('#hi-cat').on('click',function () {
//   window.location.reload(true);
// });
