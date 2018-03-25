//makes function available after the document is loaded
$(document).ready(function () {

    //variables
    var inputTotal = 0
    var wins = 0
    var losses = 0

    //Shows wins and losses
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

    //random number 19 to 120
    var random = Math.floor(Math.random() * 101 + 19)

    //makes randomizedNumber show up on screen
    $(".randomizedNumber").text(random);

    // gem's random number from 1 through 12
    var first = Math.floor(Math.random() * 11 + 1)
    var second = Math.floor(Math.random() * 11 + 1)
    var third = Math.floor(Math.random() * 11 + 1)
    var fourth = Math.floor(Math.random() * 11 + 1)

    //when the button is clicked, this function will run
    $("#first").on("click", function () {
        inputTotal = inputTotal + first;
        $(".userNumber").text(inputTotal);
        //if the input is equal to the randomized number, it will run fuction winner();
        if (inputTotal === random) {
            winner();
        }
        //or loser 
        else if (inputTotal > random) {
            loser();
        }
    })

    //when the button is clicked, this function will run
    $("#second").on("click", function () {
        inputTotal = inputTotal + second;
        $(".userNumber").text(inputTotal);
        //if the input is equal to the randomized number, it will run fuction winner();
        if (inputTotal === random) {
            winner();
        }
        //or loser 
        else if (inputTotal > random) {
            loser();
        }
    })

    //when the button is clicked, this function will run
    $("#third").on("click", function () {
        inputTotal = inputTotal + third;
        $(".userNumber").text(inputTotal);
        //if the input is equal to the randomized number, it will run fuction winner();
        if (inputTotal === random) {
            winner();
        }
        //or loser 
        else if (inputTotal > random) {
            loser();
        }
    })

    //when the button is clicked, this function will run
    $("#fourth").on("click", function () {
        inputTotal = inputTotal + fourth;
        $(".userNumber").text(inputTotal);
        //if the input is equal to the randomized number, it will run fuction winner();
        if (inputTotal === random) {
            winner();
        }
        //or loser 
        else if (inputTotal > random) {
            loser();
        }
    })
    //if user wins
    function winner() {
        alert("WINNER!");
        wins++;
        $(".wins").text("Wins: " + wins);
        //winner sound effect
        var audio = $(".audio-winner")[0];
        audio.play();
        //resets the game
        resetGame();
    }

    //if the user losses then reset game
    function loser() {
        alert("LOSSERRRRRRR");
        losses++;
        $(".losses").text("Losses: " + losses);
        // loser sound effect takes place
        var audio = $(".audio-loser")[0];
        audio.play();
        resetGame();
    }

    //need a reset when user loses or wins the game
    //It randomizes the crystal's values
    //also needs a new random number that the user has to get to
    function resetGame() {
        random = Math.floor(Math.random() * 101 + 19);
        $(".randomizedNumber").text(random);
        first = Math.floor(Math.random() * 11 + 1);
        second = Math.floor(Math.random() * 11 + 1);
        third = Math.floor(Math.random() * 11 + 1);
        fourth = Math.floor(Math.random() * 11 + 1);
        inputTotal = 0;
        $(".userNumber").text(inputTotal);
    }


});