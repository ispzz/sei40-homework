// create an object called revengeOfBadger that's gonna store all our functions
// Track how many times a student has clapped? Make up numbers? object: student: claps
// create a list that will store all the students that have clapped more than twice
// create a function that will pick a random student. If no one has clapped more than twice than badger gotta do the solution

const revengeOfBadger = {

    // SEI40 CLASS PETS <3
    students: {
        Miffy: 2,
        Bonnie: 4,
        Ruby: 3,
        Socks: 0,
        Boots: 3,
        Winnie: 2,
        Biscuit: 1,
        Rudy: 2,
        Molly: 1
    },

    shortlist: [],

    generateShortList: function() {

        // looping through the students
        for( const key in this.students ) {
            // console.log(`names: ${key}, claps: ${this.students[key]}`);

            const numberOfClaps = this.students[key];

            // if the student claps more than twice we want to add their name to the shortlist
            if ( numberOfClaps > 2 ) {
                this.shortlist.push( key );
            } // end if > 2

        } // end for in loop

        // printing out our shortlist
        // console.log('shortlist: ' + this.shortlist);

    }, // end generate short list

    // create a function that is going to pick a random student from the shortlist
    drawWinner: function() {

        // reassign shortlist to an empty array
        this.shortlist = [];

        // when the drawWinner function is called it will also generate a new shortlist
        this.generateShortList();

        // If the shortlist isn't empty then we can pick a student
        if ( this.shortlist.length > 0 ) {
            const randomIndex = Math.floor(Math.random() * this.shortlist.length);
            return this.shortlist[randomIndex];
        } else { // if no one has clapped then Badger has to present the solution
            return 'Badger';
        }

    }

}

// revengeOfBadger.generateShortList();
// revengeOfBadger.drawWinner();
// console.log(revengeOfBadger.drawWinner());
console.log(revengeOfBadger.drawWinner());

