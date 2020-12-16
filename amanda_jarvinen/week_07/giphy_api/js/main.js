console.log('Hello', $);

$(document).ready(function(){
   
    // Only show the back button for individual result
    $('#goBack').hide();

    $('#searchBtn').on('click', function(){

        // Clear the screen
        $('#details').hide();
        $('#goBack').hide();
        $('#results').empty().show();

        // Retrieve search term
        const searchTerm = $('#searchTerm').val();

        // Display search term
        $('#resultsHeading').text(searchTerm);

        // Construct URL
        const baseURL = 'http://api.giphy.com/v1/gifs/search?q=';
        const apiKey = '0KxC2vDq0SdT9gaua6lotHAFwYw7M5KR';
        const limiter = 25
        const url = baseURL + searchTerm + '&api_key=' + apiKey + '&limit=' + limiter

        // Display results in an unordered list
        $('#results').append(`<ul>`);

        $.getJSON(url)
        .done(function(response){
            // Display gif's matching search term
            const giphs = response.data;

            giphs.forEach(giph => {
                const imageURL = giph.images.fixed_height_small.url;
                $('#results').append(`<li><img giph_id="${giph.id}" src="${imageURL}" alt=""></li>`);
            }); // forEach
        })
        .fail(console.warn);

        $('#results').append(`</ul>`);
    }); // searchBtn click handler

    $(document).on('click', 'img', function(){
        $('#results').hide();

        // Construct URL
        const giphID = $(this).attr('giph_id');
        const baseURL = 'http://api.giphy.com/v1/gifs/';
        const apiKey = 'i4ijXJi19UMnBF3exXdSCszvfkIM3Yiv';
        const url = baseURL + giphID + '?api_key=' + apiKey

        $.getJSON(url)
        .done( function( response ){

            // Construct image source
            const giph = response.data;
            const imageURL = giph.images.downsized.url

            // Add back button below search title
            $('#goBack').show();

            // Prepare and display gif and it's title
            const $details = $(`
                <img src="${imageURL}" alt="">
                <p><small>${giph.title}</small></p>
            `);

            $('#details').html( $details ).show();

        })
        .fail( console.warn );
    });// img click handler

    $(document).on('click', '#goBack', function(){
        $('#details').hide();
        $('#results').show();
        $('#goBack').hide();
    }); // back button click handler
}); // document ready