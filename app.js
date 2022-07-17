var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/clap.wav");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/crash.wav");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/open-hihat.wav');
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio('sounds/kick.wav');
            tom4.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.wav');
            snare.play();
            break;

        case "d":
            var crash = new Audio('sounds/closed-hihat.wav');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;


        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
