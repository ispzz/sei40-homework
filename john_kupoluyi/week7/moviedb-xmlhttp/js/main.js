const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/search/movie'
const API_KEY = '24d863d54c86392e6e1df55b9a328755'

$(document).ready(function(){
  $('#search').on('click', function(){
    let term = $('#term').val()
    let url = `${API_URL}?api_key=${API_KEY}&query=${term}`;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onload = function(){
      data = JSON.parse(xhr.response)
      movies = data.results
      console.log(movies);
      let $ul = $('<ul>');
      $ul.addClass('movie_list');

      for(movie of movies){
        if(movie.poster_path === null) continue

        let $li = $('<li>');
        let $div = $('<div>');
        $div.addClass('popular');

        $div.html(`Popularity: ${movie.popularity}<br><span><br>${movie.overview}</span>`);
        let $a = $('<a>')
        $a.attr('href', `/movie/${movie.id}`)
        let imgTag =`<img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" height="100%" alt="">`;
        $a.append(imgTag, $div)

        $li.append($a);
        $ul.append($li);
      }

      $('#results').html("");
      $('#results').append($ul);

      $('li').mouseover(function(){
        $(this).find('span').css('display', 'block');
        $(this).find('div').css('height','80%');
      })
      .mouseout(function(){
        $(this).find('span').css('display', 'none');
        $(this).find('div').css('height','auto');
      })

      $('.movie_list li a').on('click', function(e){
        e.preventDefault()
        showMovie($(this).attr('href'))
      })
    }

    xhr.send();
  })

  const showMovie = function(href){
    let url = `${BASE_URL}${href}?api_key=${API_KEY}`
    console.log('here', url);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onload = function(){
      movie = JSON.parse(xhr.response)
      console.log(movie.title);

      let $h2 = $('<h2>')
      $h2.text(movie.title)

      let $ul = $('<ul>');
      $ul.addClass('movie')

      let $li_1 = $('<li>');
      let $img = $('<img>');

      $img.attr('src', `https://image.tmdb.org/t/p/w200/${movie.poster_path}`)

      $li_1.append($img)

      let $li_2 = $('<li>');
      let $p = $('<p>');
      $p.text(movie.overview);

      $li_2.append($p);

      $ul.append($li_1, $li_2);
      $('#results').html("");
      $('#results').append($h2, $ul);

    }

    xhr.send()
  }
})
