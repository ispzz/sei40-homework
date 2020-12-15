console.log('Movie Search!');

$(document).ready(function() {

  $('#getMovie').on('click', function() {

    const searchMovie = $('#search').val();
    console.log('Button clicked!', searchMovie);


    const xhr = new XMLHttpRequest(); // make a new instance


    xhr.onload = function() {

      const data = JSON.parse(xhr.response);

      for (let i = 0; i < data.results.length; i++) {
        console.log(i);

        const $movies = $(`<h2>${data.results[i].title}</h2><h3>${data.results[i].popularity}</h3><p>${data.results[i].overview}</p><hr>`)

        console.log('data:', data.results[i].title, data.results[i].overview);

        $('#movieresult')
          .empty()
          .append($movies);
      };

    }; // onload

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ searchMovie}`);

    xhr.send();

    console.log('response', xhr.response);

  }); // on click function

}); // document ready