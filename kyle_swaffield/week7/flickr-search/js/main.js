
const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = 'e349140f70677cf094d3833c6f5ddab4';

$(document).ready(function(){
  $('#searchText').focus();
  $('#top-banner').show();
  $('#search-banner').hide();
  $('.move-icon').hide();
  $('#loading').hide();
  $('.back-img').show();
  $('#display').hide();


  $('.search-icon').on('click',function(){
    $('#top-banner').hide();
    $('#search-banner').show();
  });
  $('.img-back').on('click',function(){
    $('#top-banner').show();
    $('#search-banner').hide();
  });
  $('h1').on('click',function(){
    $('#results').empty();
    $('#display').hide();
    $('.carousel-indicators').empty();
    $('.carousel-inner').empty();
    $('.back-img').show();
    $('#next').hide();
    $('#back').hide();
  });



  //click handeler Search
  $('#searchForm').on('submit', function( ev ){
    onClickPageSetup();

    ev.preventDefault();
    //get search searchText
    const searchText= $('#searchText').val();
    //do the AJAX request
    $('#loading').show();
    $('#results').empty();
    $('#display').hide();
    $('#done').hide();
    $('#back').attr('search_text', searchText)
    let $backNo = parseInt($('#back').attr('back_no'));
    $pageNo = $backNo + 1;
    // console.log("click", $backNo);
    //do the AJAX request
    getSearchResults( searchText, $pageNo );
  });
  //click handeler next
  $(document).on('click', '#next' ,function(){
    // onClickPageSetup();

    //get page number
     let $forwardNo = parseInt($(this).attr('forward_no'));
     $forwardNo = $forwardNo + 1;
     $('#back').attr('back_no',($forwardNo - 2));
     const $searchText = $('#back').attr('search_text');
     $(this).attr('forward_no',$forwardNo);
     console.log("forward-no: ", $forwardNo);
    //do the AJAX request
     getSearchResults( $searchText, ($forwardNo - 1));
  });
  $(document).on('click', '#back' ,function(){
    // onClickPageSetup();

    //get page number
    let $backNo = parseInt($(this).attr('back_no'));
    const $searchText = $('#back').attr('search_text');
    if($backNo !== 0){
      $backNo = $backNo - 1;
      $('#next').attr('forward_no',($backNo + 2));
      $(this).attr('back_no',$backNo);
      console.log("back-no: ", $backNo);
    }
    //do the AJAX request
    getSearchResults( $searchText, ($backNo + 1));
  });
  $(document).on('click','.img-thumbnail', function(){
    $('#top-banner').show();
    $('#search-banner').hide();

    $('#loading').show();
    $('#results').hide();
    $('#done').show();
    $('#next').hide();
    $('#back').hide();

    let $backNo = parseInt($('#back').attr('back_no'));
    const searchText = $('#back').attr('search_text')
    console.log("back no:",$backNo);
    $pageNo = $backNo + 1;
    // console.log("click", $backNo);
    //do the AJAX request
    getClickResults( searchText, $pageNo );
  });
  $(document).on('click','#done', function(){
    $('#top-banner').show();
    $('#search-banner').hide();
    $('#display').hide();
    $('.carousel-indicators').empty();
    $('.carousel-inner').empty();
    $('#results').show();
    $('#next').show();
    $('#back').show();
    $('#done').hide();
  });
  $(document).on('click','.item', function(){
    $('#top-banner').show();
    $('#search-banner').hide();
  });
});//document ready

const onClickPageSetup = () => {
  $('#top-banner').show();
  $('#search-banner').hide();
  $('.move-icon').show();
  $('.back-img').hide();
  $('#loading').show();
};

//performs the AJAX request
const getSearchResults = (queryText,pageNo) => {
   console.log('getSearchResults():', queryText, pageNo);
  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: queryText,
    format: 'json',
    nojsoncallback: 1,
    page: pageNo
  })
  .done( displaySearchResults )
  .fail( console.warn )
};//getSearchResults

const getClickResults = (queryText,pageNo) => {
   console.log('getSearchResults():', queryText, pageNo);
  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: queryText,
    format: 'json',
    nojsoncallback: 1,
    page: pageNo
  })
  .done( displayClickResults )
  .fail( console.warn )
};//getSearchResults

const displaySearchResults = (results) => {
  // console.log('displaySearchResults:', results);
  //loop through image results
  $('#results').empty();
  results.photos.photo.forEach( photo => {
    // console.log('photo', photo.id);
    const url = `https://live.staticflickr.com/${photo.id}/${photo.id}_${photo.secret}_q.jpg`;
    // console.log( url );
    const $img = $(`<img src = "${ url }" class="img-thumbnail col-sm-3 thumb-img shadow" photo_id="${photo.id}" photo_secret="${photo.secret}">`);
    $('#loading').hide();
    $('#results').append($img);
  });//photo forEach
}; //displaySearchResults

const displayClickResults = (results) => {
  // console.log('displaySearchResults:', results);
  //loop through image results
  $('#results').hide();
  $('#next').hide();
  $('#back').hide();
  $('#done').show();
  // console.log('photo', photo.id);
  // console.log('displaySearchResults:', results);
  //loop through image results
  let counter = 1;
  let active = "active";
  results.photos.photo.forEach( photo => {
    // console.log('photo', photo.id);
    const url = `https://live.staticflickr.com/${photo.id}/${photo.id}_${photo.secret}_c.jpg`;
    let $pageNo = parseInt($('#back').attr('back_no')) + 1;
    // console.log( url );
    indCount = counter - 1;
    if( indCount === $pageNo){
      active = "active";
    }else{
      active = "";
    }
    const $indicators = $(`<li data-target="#myCarousel" data-slide-to="${indCount}" class="${active}"></li>`);
    const $img = $(`
      <div class="item ${active}">
        <img src="${ url }" style="width:100%;" photo_id="${photo.id}" photo_secret="${photo.secret}">
      </div>`);
    $('#loading').hide();
    $('#display').show();
    load_js_one();
    $('.carousel-indicators').append($indicators)
    $('.carousel-inner').append($img);
    counter += 1;
  });//photo forEach
}; //displaySearchResults
//
function load_js_one()
{
   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.src= 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
   head.appendChild(script);
}
function load_js_two()
{
   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.src= 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
   head.appendChild(script);
}
