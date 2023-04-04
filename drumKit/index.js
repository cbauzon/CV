var numButtons = document.querySelectorAll("button.drum").length;

// FUNCTION TO DETERMINE WHICH SOUND TO PLAY
function playSound(char) {
    switch(char) {
        case "w":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(this.textContent)
            break;
    }
    
}

function buttonAnimation(char) {
    document.querySelector("." + char).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + char).classList.remove("pressed");
    }, 100);
}

// DETECTING BUTTON PRESSES
for (i = 0; i < numButtons; i++) { 
    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        playSound(this.textContent);
        buttonAnimation(this.textContent);
    });
}

// DETECTING KEY PRESSES
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});