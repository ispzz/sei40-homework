$(document).ready(function () // Document ready

  // 1. When the submit button is clicked....
      $('#searchBar').on( 'click', function() {

      $('#details').hide(); // in case they were visible

      $('#results').empty().show(); // in case they were hidden
  });
  const drinksList = $('#drinksList')
  console.log('button clicked, searchBar: ', searchBar);

  $.getJSON( `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ searchBar }`)

  .done( function( response ){
          // 4. When we get the search results, let's show
          // them on the page
  for( let i = 0; i < response.drinks; i++ ){
      const drink = response.drinks[i];

  console.log( 'drinksList:', response );

   //end of done
  //end of click handler
  const $details = $(`
        <button id="goBack">&lt;&lt; Back</button>
        <h1>${ response.StrDrink }</h1>
        <h4>${ response.StrCategory }</h4
        <p>${ response.StrInstructions }</p>
      `);

    $('#details').html( $details ).show();


  }); // done
      .fail( console.warn );

    }); // h3 click handler

    $(document).on('click', '#goBack', function(){
      console.log('back clicked!');
      $('#details').hide();
      $('#drinksList').show();
    });
});// document ends
