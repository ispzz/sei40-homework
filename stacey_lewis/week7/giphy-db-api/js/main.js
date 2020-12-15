console.log('Giphy Search');


$(document).ready(function(){

  //on click of button
  $('#keywordSearchButton').on('click', function(){

    //ensure previous items are clear
    $('#keywordSearch').show().empty();
    //ensure show page is hidden
    $('#detailsPage').hide();

    //get search term from button
    const searchTerm = $('#giphySearch').val();

    $.getJSON(`
      https://api.giphy.com/v1/gifs/search?api_key=tG9slbao9uahDNKDf4PdEXsCc7SaRrQh&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
      .done(function(response){
        //loop through responses and append to page. Responses live in data object.
        for (let i = 0; i < response.data.length; i++) {
          //get each to loop through and save into gifItem
          const gifItem = response.data[i];
          //create a JQuery object to append to page.
          const $gifItem = $(`
            <ul>
              <li gif_id="${gifItem.id}">
                <h4>Title: ${gifItem.title}</h4>
                <img src=${gifItem.images.fixed_height_downsampled.url}">
                <hr>
              </li>
            </ul>
          `);

          //append to page
        $('#keywordSearchResults').append($gifItem);

        } //for

      }) //done

      .fail(function(e){
        console.warn(e.status);
      }); //fail

      console.log('button clicked! Search text:', searchTerm);

  }); //on click of search button




  //on click of list item
  $(document).on('click', 'li', function(){


    $('#detailsPage').empty();

    const gifID = $(this).attr('gif_id');
    url = `https://api.giphy.com/v1/gifs/${gifID}?api_key=tG9slbao9uahDNKDf4PdEXsCc7SaRrQh`

    // console.log(url);

    $.getJSON(url)
    .done(function(response){

      const $details = $(`
      <button id="goBack">Back</button>
      <h1>${response.data.title}</h1>
      <p>Original Size:</p>
      <p>Size: ${ response.data.images.original.size}</p>
      <p>Height: ${ response.data.images.original.height}</p>
      <p>Width: ${ response.data.images.original.width}</p>
      <img src="${response.data.images.original.url}">
      <p>Fixed Width:</p>
      <p>Size: ${ response.data.images.fixed_width.size}</p>
      <p>Height: ${ response.data.images.fixed_width.height}</p>
      <p>Width: ${ response.data.images.fixed_width.width}</p>
      <img src="${response.data.images.fixed_width.url}">
      <p>Fixed Height</p>
      <p>Size: ${ response.data.images.fixed_height.size}</p>
      <p>Height: ${ response.data.images.fixed_height.height}</p>
      <p>Width: ${ response.data.images.fixed_height.width}</p>
      <img src="${response.data.images.fixed_height.url}">
      <p>Original Still:</p>
      <p>Size: ${ response.data.images.original_still.size}</p>
      <p>Height: ${ response.data.images.original_still.height}</p>
      <p>Width: ${ response.data.images.original_still.width}</p>
      <img src="${response.data.images.original_still.url}">

      `);

      $('#keywordSearchResults').hide();
      $('#detailsPage').html($details);
      $('#detailsPage').show();
    })
    .fail(function(e){
      console.warn(e.status);
    });
  }); //on click of list item.

  //back to index button
  $(document).on('click', '#goBack', function(){
    $('#detailsPage').hide();
    $('#keywordSearchResults').show();

  });




}); //document ready
