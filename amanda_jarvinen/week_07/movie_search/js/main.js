
$(document).ready(function(){

    let movieID;

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
            // Access movies
            const movies = data.results;

            $('#results').append('<ul>');

            movies.forEach(movie => {
                let $movieDetails;
                // Prepare movie details for display
                if (movie.poster_path != null){
                    $movieDetails = $(`
                    <li>
                        <a href="#" movieID="${movie.id}">
                            <img src="https://image.tmdb.org/t/p/w154/${movie.poster_path}" alt="${movie.title}" id="poster">
                            <strong>${movie.title}</strong>
                        </a>
                    </li>
                `);
                } else {
                    $movieDetails = $(`
                    <li>
                        <a href="#" id="moviePage">
                            <strong>${movie.title}</strong>
                        </a>
                    </li>
                `);
                }

                // Display movie details
                $('#results').append($movieDetails);
            }); // forEach



            $('#results').append('</ul>');

            // Clear movies on new search
            $('#submitSearch').on('click', function(){
                $('#results').empty()
            });
        }; // onload
    }); // submitSearch click event
}); // document ready

