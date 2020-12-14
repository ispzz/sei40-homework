console.log('Hello ', $)

$(document).ready(function(){

    $('#submitSearch').on('click', function() {
        const title = $(`#searchTitle`).val();
        console.log(`${title}`);
    }); // submitSearch click event
}); // document ready