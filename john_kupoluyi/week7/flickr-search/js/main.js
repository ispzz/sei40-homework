console.log('main.js loaded');

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';


$(document).ready(function(){
  console.log('Flickr search ready!');
  $('#searchText').focus();

  $('#searchForm').on('submit', function(e){
    e.preventDefault();
    $('.loading').show();
    const searchText = $('#searchText').val();
    const currPage = '1';

    getSearchResults( searchText, currPage);
  })
})

const getSearchResults = (queryText, currPage) => {
  // console.log(queryText);
  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: queryText,
    page: currPage,
    format: 'json',
    nojsoncallback: 1
  })
  .done(displaySearchResult)
  .fail(console.warn)
}

const displaySearchResult = data => {
  $('#results').html("");
  $('nav').html("");
  $('#details').hide().html("");

  // console.log(data.photos);
  data.photos.photo.forEach( (photo, idx) => {
    const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`

    const $img = $(`<img src="${url}">`)
    $img.addClass('image').attr({
      'data-position': idx,
      'data-photoid': photo.id,
      'data-secret': photo.secret,
      'data-server': photo.server
    });

    $('#results').append($img);
    $('.loading').hide();
  })

  generateNavigation(data.photos.page, data.photos.pages)
}

const generateNavigation = (page, pages) => {
  let $next = $('<span>');
  let $prev = $('<span>');

  if(page === 1)
    term = $('#searchText').val();

  prevPage = page > 1 ? page - 1 : page;
  nextPage = page < pages ? page + 1 : pages;

  $next.text('next >').addClass('nav').attr({
    id: nextPage,
    'data-term': term
  });

  $prev.text('< prev').addClass('nav').attr({
    id: prevPage,
    'data-term': term
  });

  let $pageControls = $('<div>');
  $pageControls.append($prev, 'Page ', page, ' of ', pages, $next);

  $('nav').append($pageControls);
}

$(document).on('click', '.nav', function(){
  $('.loading').show();
  getSearchResults(
    $(this).data('term'),
    $(this).attr('id')
  )
});

$(document).on('click','.image', function(){
  $imgContainer = $('<div id="imgContainer">');
  $navContainer = $('<div>')
  $close = $('<div class="close">close</div>');
  $next = $(`<div data-idx = ${$(this).data('position')} data-button="next" class="nextNav">next</div>`);
  $prev = $(`<div data-idx = ${$(this).data('position')} data-button="prev" class="prevNav">prev</div>`);

  $largeImg = $(
    `<img src="https://live.staticflickr.com/${$(this).data('server')}/${$(this).data('photoid')}_${$(this).data('secret')}_c.jpg">`
  );

  $navContainer.append($prev, $close, $next);
  $imgContainer.append($largeImg, $navContainer);
  $('#details').append($imgContainer).css('display','flex')
});

$(document).on('click', '.nextNav, .prevNav', function(e){
  e.stopPropagation();
  currPosition = Number($(this).data('idx'));
  button = $(this).data('button');

  if(currPosition < 100 && button === 'next'){
    $(this).data('idx', currPosition + 1);
    $('.prevNav').data('idx', currPosition + 1);
    swapImage(currPosition + 1);

  } else if(currPosition > 0 && button === 'prev'){
    $(this).data('idx', currPosition - 1);
    $('.nextNav').data('idx', currPosition - 1);
    swapImage(currPosition - 1);
  }
})

const swapImage = position => {
  $el = $(`[data-position="${position}"]`)

  $largeImg = $(
    `<img src="https://live.staticflickr.com/${$el.data('server')}/${$el.data('photoid')}_${$el.data('secret')}_c.jpg">`
  );

  $('#imgContainer img').remove();
  $('#imgContainer').append($largeImg);
};

$(document).on('click', '#details, .close', function(){
  $('#details').hide().html("");
})

$(document).on('click', '#imgContainer', function(e){
  e.stopPropagation();
})
