var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).on("keydown", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Even listener for a button press
$(".btn").on("click", function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress("#" + this.id);

    checkAnswer(userClickedPattern.length - 1);
});

// Builds up the sequence
function nextSequence() {
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).animate({opacity: "25%"});
    
    setTimeout(function () {
        $("#" + randomChosenColour).animate({opacity: "100%"});
    }, 100);

    playSound(randomChosenColour);

    level ++;
    $("#level-title").text("Level " + level);
}

// Plays a sound based on the buttons that are selected
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Animates a button press by the user
function animatePress(currentColour) {
    $(currentColour).addClass("pressed");
    setTimeout(function () {
        $(currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success!");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong")
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press a Key to Restart");
        console.log("Wrong!");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}