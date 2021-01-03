### Text Soup 3: Wikipedia

Make a few modifications to the code from [Text Soup 2](https://github.com/ispzz/sei37-homework/blob/master/warmups/week4/day1_text_soup_2) (make a copy, don't edit the version in the homework repo! Also, make sure it works before making changes!), to cause the random words to be sourced dynamically via AJAX from Wikipedia, instead of from a hidden DIV already present in the HTML.

Your code should allow the user to specify a Wikipedia page name via a querystring field in the URL, such as `index.html?page=Alan+Turing`, whose contents will then be loaded via the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page).

Hint: ([SO](https://stackoverflow.com/a/4210920) is your friend, and so is [Google](https://www.google.com.au/search?q=javascript+get+querystring+key+value).)