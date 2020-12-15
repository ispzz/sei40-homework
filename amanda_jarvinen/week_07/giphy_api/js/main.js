console.log('Hello', $);

$(document).ready(function(){

    $('#searchBtn').on('click', function(){
        const searchTerm = $('#searchTerm').val();
        console.log(searchTerm);

        const apiKey = '0KxC2vDq0SdT9gaua6lotHAFwYw7M5KR';
        const baseURL = 'http://api.giphy.com/v1/gifs/search?q=';
        const limiter = '&limit=5'
        const url = baseURL + searchTerm + '&api_key=' + apiKey + limiter

        $.getJSON(url)
        .done(function(response){
            // Display gif's matching search term
            const giphs = response.data;
            giphs.forEach(giph => {
                const imageURL = giph.images.downsized.url;
                $('#results').append(`<img src="${imageURL}" alt="">`);
            });
        })
        .fail(console.warn);
    });
});