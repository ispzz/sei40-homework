const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

$(document).ready( function(){

  $('#searchText').focus();  // focus the cursor in the search text field

  $('#searchForm').on('submit', function( ev ){
    ev.preventDefault(); // stop the form submit from reloading the page

    // Get the search text from the form
    const searchText = $('#searchText').val();

    // Do the AJAX request to search for this text
    getSearchResults( searchText );
  }); // form submit handler

}); // document ready

// This function actually performs the AJAX request to Flickr
const getSearchResults = (queryText) => {

  console.log('getSearchResults():', queryText);

  $.getJSON(URL, {
    api_key: '',
    method: '',
    text: '',
    format: 'json',
    nojsoncallback: 1
  })
  .done( data => {
    console.log('response', data);
  })
  .fail( console.warn );

}; // getSearchResults()
