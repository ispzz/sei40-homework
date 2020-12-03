  console.log('jQuery', $);

$(document).ready(function(){

  $('#kitty').on('click', function(ev){
    console.log('Kitty Clicked!');

    $('#kitty').css('border', '10px solid red');

    console.log('ev:', ev);

  });

  // document.addEventListener('keydown', logKey);
  // function logKey(e){
  //   log.textContent +=
  // }

  // $('document').keydown(function(){
  //   console.log('Keydown entered!');
  // })

  $('#kitty').on('mouseenter', function(){
    console.log('Mouse entered image area!');
  })

  $('#kitty').on('mouseleave', function(){
    console.log('Mouse left image area');
  })

  // $('#kitty').on('hover', function(){
  //   console.log('mouse entered');
  // },
  // function(){
  //   console.log('mouse left');
  // }
  //   );

  // $('#kitty').on('mousemove', function(){
  //   console.log('mouse moved on image');
  // });

  // $('li').on('click', function(){
  // const contents = $(this).html();
  // console.log(`Some ${contents} was clicked`)
  //   $(this).css('color', 'red');
  // })

  $('input[type="text"]').on('keypress', function(event){
    console.log('key event', event);

    if(event.key === 'x'){
      console.log('x key was pressed');
    }
  })

  $('input[type="text"]').on('focus', function(){
    console.log('Form input focused');
  })

  $('input[type="text"]').on('blur', function(){
    console.log('Form input blurred');
  })

  $('#toggle').on('click', function(){
    console.log('toggle button clicked');
    $('.triple-kitty1').toggle();
  })

  $('#fade').on('click', function(){
    $('.triple-kitty2').slideToggle();
  });

  $(window).on('resize', function(){
    console.log('window resizing!');
  })

  $('*').on('click', function(ev){
    console.log('target:', ev.target);
    console.log('currentTarget:', ev.target);
    console.log('________________________');
    ev.stopPropagation(); // prevent event from reaching parents
  });

  $('#kitty').css('position', 'relative')
  $('#kitty').css('z-index', '1')
  $('#kitty').animate({
    left: '500px',
    top: '200px'
  }, 3000).animate({left:0}, 1000)
}); // end of the document.ready
