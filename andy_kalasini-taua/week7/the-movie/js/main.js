
// AJAX
// JSON - JS Object Notation


$(document).ready(function(){


  $('#getMovie').on('click', function(){

    const movieSearch = $('#searchMovie').val();
    console.log('Button clicked!', movieSearch);

    const xhr = new XMLHttpRequest(); // make a new instance

    xhr.onload = function() {

      const data = JSON.parse( xhr.response );
      console.log('data:', data);

      const $movie = $(`<p>${ data.text }</p><hr>`);

      $('#results')
        .empty()
        .append( $movie );  // add to DOM!


    }; // onload


    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movieSearch}`);

    xhr.send();

    console.log('response too soon', xhr.response);

  }); // on click

}); // document ready
