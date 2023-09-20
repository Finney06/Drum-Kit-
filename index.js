// document.querySelectorAll("button").forEach(.addEventListener("click", handleClick))

// function handleClick () {
//     alert("The button has been clicked")
// };


//Detecting Button Press

document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
} 

//Detecting Keyboard Press

document.addEventListener("keypress", function(event){

  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3")
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/kick-bass.mp3")
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/snare.mp3")
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;

    case "j":
      var kickbass = new Audio("sounds/tom-3.mp3")
      kickbass.play();
      break;

    case "k":
      var crash = new Audio("sounds/tom-1.mp3")
      crash.play();
      break;

    case "l":
      var snare = new Audio("sounds/tom-2.mp3")
      snare.play();
      break;

    default:
      console.log (buttonInnerHTML);
      break;
  } 
}