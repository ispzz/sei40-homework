
console.log('SEARCH main.js loaded');

$(document).ready( function(){

// 1. When the submit button is clicked ...
$('#doSearch').on( function(){

//2. Get the search text that was typed into the form ...
  const searchText = $('#searchText').val();
  console.log('button clicked, searchText: ', searchText);


// 3. ... and plug that search text into the correct URL for doing a moviedb.org move search
  $.getJSON( `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ searchText }&page=3` )
  .done( function( response ){



//4. When we get the search results, lets show them on hte page
    console.log( 'response:', response );

    for ( let i = 0; i < response.results.length; i++ ) {
      const movie = response.results[i];
      // console.log( movie );
    }
});

  })
  .fail( function( err ){
    console.log( err.status, err.statusText );
  });

}); //document ready
