
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
            // Access movies
            const movies = data.results;

            $('#results').append('<ul>');

            movies.forEach(movie => {
                let $movieDetails;
                // Prepare movie details for display
                if (movie.poster_path != null){
                    $movieDetails = $(`
                    <li>
                        <a id="moviePage" href="">
                            <img src="https://image.tmdb.org/t/p/w154/${movie.poster_path}" alt="${movie.title}" id="poster">
                            <strong>${movie.title}</strong>
                        </a>
                    </li>
                `);
                } else {
                    $movieDetails = $(`
                    <li>
                        <a id="moviePage" href="">
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

    $('#moviePage').on('click', function(){
        console.log("Hello")
        // Clear the page
        $('#results').empty()


        // 


//         $('.detailsLink').on('click', function(){
//             $('#results').empty()
//             const detailsXHR = new XMLHttpRequest(); // on click of the a tag, which is a class, it clears page and performs new request
//   ​
//             xhr.open('GET', `https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=24d863d54c86392e6e1df55b9a328755`);
//             xhr.send(); // Opens a request for the details page from the movie in the loop
//   ​
//             detailsXHR.onload = function(){
//               const detailsData = JSON.parse(detailsXHR.response);
//               console.log(`Data: ${detailsData}`);
//               $('#results').append(detailsData); // interprets the data and appends the result to the div
  
    });
}); // document ready