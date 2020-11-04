

// ## Warmup - Serge Says

// ## Examples
// * Serge answers 'Sure.' if you ask him a question.

// * He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// * He says 'Fine. Be that way!' if you address him without actually saying anything.

// * He answers 'Whatever.' to anything else.

// * Create a function that takes an input and returns Serge's response.

const sergeSays = function( message ) {
    // let response = "";

    if ( message.endsWith('?') ) {
        // response = 'Sure';
        return 'Sure';
    } else if ( message === "" ) {
        return 'Fine. Be that way!';
    } else if ( message === message.toUpperCase() ) {
        return 'Woah, chill out!';
    } else {
        return 'Whatever.';
    }

}; // end of sergeSays

console.log(sergeSays( 'Hello?' ));
console.log(sergeSays( 'HELLOOOO' ));
console.log(sergeSays( '' ));
console.log(sergeSays( 'Hello.' ));