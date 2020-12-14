console.log('Hello ', $)

$(document).ready(function(){

    $('#submitSearch').on('click', function() {
        
        // Assign user search term
        const title = $(`#searchTitle`).val();
        console.log(`${title}`);

        // Create an instance of the XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Open HTTP request
        xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${title}`);
        xhr.send();

        xhr.onload = function() {
            // Receive response string and parse into JS object
            const data = JSON.parse(xhr.response);

            console.log('response:', data)
        }; // onload


    }); // submitSearch click event
}); // document ready