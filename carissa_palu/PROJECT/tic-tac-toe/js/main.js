/ Flag variable for checking Turn
// We'll be modifying our base logic in the
// next steps as per requirements
var turn = 1;

$("button").click(function() {
    if(turn == 1) {
        $("#screen").text("PLAYER 2 TURN FOLLOWS");

    // Check sign font from font-awesome
    $(this).addClass("fa fa-check");
        turn = 2;
    }
    else {
        $("#screen").text("PLAYER 1 TURN FOLLOWS");

        // Cross sign font from font-awesome
        $(this).addClass("fa fa-times");
        turn = 1;
    }
}); 
