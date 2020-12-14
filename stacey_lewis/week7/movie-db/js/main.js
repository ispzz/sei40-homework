console.log('Hello Ajax!', $);


$(document).ready(function(){

  $('#keywordSearch').on('click', function(){

    $('#body').empty();

    console.log("button click!");

    const $movieSearchResult = $('.movieNameSearch').val();

    const xhr = new XMLHttpRequest(); //make a new instance

    xhr.onload = function() {

      const data = JSON.parse(xhr.response);



      for (let i=0; i < data.results.length; i++) {
        const $movieTitle = $(`<h1>${data.results[i].original_title}</h1>`);
        const $movieDescription = $(`<p>${data.results[i].overview}</p>`);
        const $moviePopularity = $(`<p> popularity score: ${data.results[i].popularity.toFixed(1)}</p><hr>`);
        $('#body').append($movieTitle); //add to DOM!
        $('#body').append($movieDescription); //add to DOM!
        $('#body').append($moviePopularity); //add to DOM!

      } //for loop
    }; //onload


    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${$movieSearchResult}`);

    xhr.send();

  }); //on click

}); //doc ready
