// button will keep the track of all the buttons
var button = document.getElementsByClassName("image");

// drumSounds will keep the track of all the sounds 
var drumSounds = ["sounds/drum1.mp3", "sounds/drum2.mp3","sounds/drum3.mp3", "sounds/drum4.mp3", "sounds/drum5.mp3", "sounds/drum6.mp3", "sounds/drum7.mp3"];

// traverse through all the buttons
// in this passing event to function is optional beacuse while pressing the button we know which 
// button is pressed
for(var i = 0; i < button.length; i++){
    button[i].addEventListener("click" , function (){
        var buttonPress = this.innerText;
        makesound(buttonPress);
    });
}


// look if any keyboard key is pressed 
// in this event is passed because we don't know which key is pressed until we get it as an event to 
// our function
document.addEventListener("keydown", function(event){
    makesound(event.key);
})

// make sound based on the key which is pressed
function makesound(key){
    switch(key){
        case "a":
            var sound = new Audio(drumSounds[0]);
            sound.play();
            break;
        case "s":
            var sound = new Audio(drumSounds[1]);
            sound.play();
            break;
        case "d":
            var sound = new Audio(drumSounds[2]);
            sound.play();
            break;
        case "f":
            var sound = new Audio(drumSounds[3]);
            sound.play();
            break;
        case "j":
            var sound = new Audio(drumSounds[4]);
            sound.play();
            break;
        case "k":
            var sound = new Audio(drumSounds[5]);
            sound.play();
            break;
        case "l":
            var sound = new Audio(drumSounds[6]);
            sound.play();
            break;
    }
}

