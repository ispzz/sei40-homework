console.log('Working!');

//TODO
//Put all DOM queries into variables
//Make things resize properly (don't hardcode)


$(document).ready(function() {


  //Change page to 'home' state
  $('#home').on('click', function() {
    $fadeTrivia();
    $fadeBio();
    $('h1').animate({top: '175px'}, 500);
    $('.centerContainer').animate({height: '700px', marginTop: '0px'}, 500);
    setTimeout(function() {
      $('#intro').fadeIn();
      $('.vBar').animate({height: '100%'}, 500);
    }, 600);
    setTimeout(function() {
      $('#quote').fadeIn();
    }, 700);
  });


  //Change page to 'bio' state
  $('#bio').on('click', function() {
    $fadeHome();
    $fadeTrivia();
    $('h1').animate({top: '15px'}, 500);
    setTimeout(function() {
      $('h2').fadeIn();
      $('#early').fadeIn();
      $('.centerContainer').animate({height: '2600px', marginTop: '1600px'}, 500);
      $('.vBar').animate({height: '4230px'}, 500);
    }, 500);
  });

  //Change tab to CompSci
  $('#contributionHeading').on('click', function() {
    $('#early').fadeOut();
    setTimeout(function() {
      $('#contributions').fadeIn();
      $('.centerContainer').animate({height: '4150px', marginTop: '3150px'}, 500);
      $('.vBar').animate({height: '7330px'}, 500);
    }, 500);
  });

  //Change tab to Early Life
  $('#earlyYears').on('click', function() {
    $('#contributions').fadeOut();
    setTimeout(function() {
      $('#early').fadeIn();
      $('.centerContainer').animate({height: '2600px', marginTop: '1600px'}, 500);
      $('.vBar').animate({height: '4230px'}, 500);
    }, 500);
  });



  //Change page to 'trivia' state
  $('#trivia').on('click', function() {
    $fadeBio();
    $fadeHome();
    $('h1').animate({top: '15px'}, 500);
    $('.centerContainer').animate({height: '700px', marginTop: '0px'}, 500);
    $('.vBar').animate({height: '100%'}, 500);
    setTimeout(function() {$('#triviaList').fadeIn()}, 500);
    setTimeout(function() {$('#one').fadeIn()}, 600);
    setTimeout(function() {$('#two').fadeIn()}, 700);
    setTimeout(function() {$('#three').fadeIn()}, 800);
    setTimeout(function() {$('#four').fadeIn()}, 900);
    setTimeout(function() {$('#five').fadeIn()}, 1000);
  });

  //Change page to 'media' state
  $('#media').on('click', function() {
    $fadeBio();
    $fadeTrivia();
    $fadeHome();
    $('img').animate({height: '120px', borderRadius: '10px'}, 500);
    $('h1').animate({top: '5px'}, 500);
    setTimeout(function() {
      $('.mediaContainer').fadeIn();
      $('.mediaRibbon').fadeIn();
    }, 500);
  });

  //Fade out Bio
  const $fadeBio = function() {
    $('h2').fadeOut();
    $('#early').fadeOut();
    $('#contributions').fadeOut();
  }

  //Fade out Home
  const $fadeHome = function() {
    $('#intro').fadeOut();
    $('#quote').fadeOut();
  }

  //Fade out trivia
  const $fadeTrivia = function() {
    $('#triviaList').fadeOut();
    $('#one').fadeOut();
    $('#two').fadeOut();
    $('#three').fadeOut();
    $('#four').fadeOut();
    $('#five').fadeOut();
  }


}); //end of $(document).ready() handler
