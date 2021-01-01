
console.log('SEARCH main.js loaded');

$(document).ready( function(){


  $('#doSearch').on('click', function(){

    const searchText = $('#searchText').val();
    console.log('button clicked, searchText: ', searchText);

    $.getJSON( `https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=ba037cc766c077e1fc9fe9c969963e54&hash=cd1b7b0023d12cbfe3823a231aaa3090`)
      .done( function( response ){
      console.log( 'response:', response );

      for( let i = 0; i < response.data.results.length; i++) {
      const character = response.data.results[i];
      // console.log( character.name );

      const $characterResult = $(`
        <h3 character_id="${ character.id }">${ character.name }</h3>
        <p>${ character.description }</p>
        <img src="${ character.thumbnail.path }/portrait_fantastic.${ character.thumbnail.extension }">
        <hr>
      `);



       $('#results').append( $characterResult ); // Appending tag to the DOM

    } // for each superhero character


    })
    .fail( function( err ){
      console.warn( err.status, err.statusText);
    }); //end of click handler



    }); //end of fail

    // $('h3').on('click', function(){
    $(document).on('click', 'h3', function(){
    console.log('An H3 was clicked!');
    console.log('clicked item', $(this).attr('character_id') );

    const url = `http://gateway.marvel.com/v1/public/comics?ts=thesoer&apikey=ba037cc766c077e1fc9fe9c969963e54&hash=cd1b7b0023d12cbfe3823a231aaa3090`

    const characterID = $(this).attr('character_id');

    console.log( url );

    }); //h3 click handler




    }); //end of document.ready
