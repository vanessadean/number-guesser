$(document).ready(function() {    
    var number = Math.round(Math.random() * 10);
    console.log(number); //so we can see the number in the console and cheat a little
    
    $('#submit').click(function(){
        console.log('hey'); //this was for debugging to make sure my click handler was working

        var guess = $("#pass").val();
        
        // use parseInt to convert the user input from string to number
        // otherwise they won't be equal (different types)
        if (parseInt(guess) === number) {
            $("#result").html("You got it!");
        } else if (parseInt(guess) > number) {
            $("#result").html("Pick a lower number.");
        } else {
            $("#result").html("Pick a higher number.");
        }
    });
});