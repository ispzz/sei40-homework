$("button").click(function() {
    if($(this).hasClass("fa fa-times") ||
            $(this).hasClass("fa fa-check"))
    {
        $(this).css("background-color", "red");
        setTimeout(() => {
            $(this).css("background-color", "white");
        }, 800);
    }
}); 
