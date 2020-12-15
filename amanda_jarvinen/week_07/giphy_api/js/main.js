console.log('Hello', $);

$(document).ready(function(){

    $('#searchBtn').on('click', function(){
        const searchTerm = $('#searchTerm').val();
        console.log(searchTerm);

        const apiKey = '0KxC2vDq0SdT9gaua6lotHAFwYw7M5KR';
        const baseURL = 'http://api.giphy.com/v1/gifs/search?q=';

        const url = baseURL + searchTerm + '&api_key=' + apiKey

        console.log(url)

        // $.getJSON()
        // .done()
        // .fail(console.warn);
    });
});