console.log('Hello', $);

$(document).ready(function(){

    $('#searchBtn').on('click', function(){
        const searchTerm = $('#searchTerm').val();
        console.log(searchTerm)
    });
});