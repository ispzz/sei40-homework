console.log('Rick and Morty');

$(document).ready(function() {

  $('#search').on('click', function() {

    $('#moreInfo').hide(); // in case they were visible

    $('#found').empty().show(); // in case they were hidden

    const searchField = $('#searchField').val();
    // console.log('button clicked, searchField:', searchField);

    // search
    $.getJSON(`https://rickandmortyapi.com/api/character/?name=${searchField}`)
      .done(function(data) {
        console.log('data:', data);
        // loop through all results from the getJSON request
        for (let i = 0; i < data.results.length; i++) {
          const info = data.results[i];
          // console.log(results.name, results.status);

          const $myResult = $(`
              <h3 character_id="${info.id}"> ${i + 1}.
              ${info.name} (${info.species})
              </h3>
              <p>${info.status}</p>
              <img src="${info.image}">
            `);

          $('#found').append($myResult);

        } // for loop
      })
      .fail(console.warn);

  }); // search .on click

  $(document).on('click', 'h3', function() {

    // Hide search results
    $('#found').hide();

    const characterID = $(this).attr('character_id');

    const url = `https://rickandmortyapi.com/api/character/${characterID}`;


    $.getJSON(url)
      .done(function(response) {
        console.log('character id', response);

        const $moreDetails = $(`
          <button id="goBackPage">&lt;Back</button>
          <h1>${response.name}</h1>
          <h3>Type: ${response.type}</h4>
          <p>${response.gender}</p>
          <img src="${response.image}">
          `);

        $('#moreInfo').html($moreDetails).show();

      })
      .fail(console.warn);

  }); //document .on click

  $(document).on('click', '#goBackPage', function() {
    console.log('back clicked');
    $('#moreInfo').hide();
    $('#found').show();

  });

}); //document .ready