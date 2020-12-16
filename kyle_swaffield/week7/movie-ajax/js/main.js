// console.log("Test")
$(document).ready(function(){

  $('#search').on('click', function(){
    const xhr = new XMLHttpRequest();
    const searchTerm = $('#searchTerm').val();
    xhr.open('GET',`https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ searchTerm }`);
    xhr.send();
    $('#picture').empty()
    $('#results').empty()
    $('#header').empty()

    xhr.onload =function(){
      const data = JSON.parse(xhr.response);
      let $index = $(`
        <h2>Search Results ${ searchTerm }</h2>
        <h3>Total number of results: ${ data.total_results }</h3>
        `);
        $('#header').append($index);

        data.results.forEach(function(item,index){
          $index = `<div style="height:420px;"><p>`;
          for(const [key,value] of Object.entries(item)){
            if(key === 'poster_path'){
              pic = `<div style="height:420px;"><img class="img-thumbnail" src="https://image.tmdb.org/t/p/w200${value}"></div>`;
              $('#picture').append(pic);
            }
            else if(key === 'backdrop_path'){
            }
            else if(key === 'title'){
              $index += `<strong>${ key }</strong>: <span id="title">${value}</span> <br>`
            }
            else {
              $index += `<strong>${ key }</strong>: ${value} <br>`;
            };
          };
          $index +=  `</p></div>`;
          $('#results').append($index);
        });
    };
  });

  $('#title').click(function(){
    console.log('click');
    // const xhr = new XMLHttpRequest();
    // const searchTerm = $('#title').html();
    // xhr.open('GET',`https://api.themoviedb.org/3/movie/${searchTerm}?api_key=24d863d54c86392e6e1df55b9a328755`);
    // xhr.send();
    //
    // xhr.onload =function(){
    //   const data = JSON.parse(xhr.response);
    //   let $index = $(`
    //     <h2>Details for: ${ data.title }</h2>
    //     `);
    //
    //     $('#header')
    //     .empty()
    //     .append($index);
    //
    //     data.results.forEach(function(item,index){
    //       $index = `<div style="height:420px;"><p>`;
    //       for(const [key,value] of Object.entries(item)){
    //         if(key === 'poster_path'){
    //           pic = `<div style="height:420px;"><img class="img-thumbnail" src="https://image.tmdb.org/t/p/w200${value}"></div>`;
    //           $('#picture').append(pic);
    //         }
    //         else if(key === 'backdrop_path'){
    //         }
    //         else {
    //           $index += `<strong>${ key }</strong>: ${value} <br>`;
    //         };
    //       };
    //       $index +=  `</p></div>`;
    //       $('#results').append($index);
    //     });
    // };
  });
});
