function alertUser(msg) {
    alert(msg);
}

setTimeout(function(){alert("The aliens designed this to be REALLLY F*CKING ANNOYING. But here is a CLUE!! - Find the radio that sounds like a man falling off a cliff, then you are close!")},45000);

setTimeout(function(){alert("CLUE!! - The black hole of death is protecting your radio!")},90000);

setTimeout(function(){alert("FINAL CLUE!! - 12 radios then 7 radios")},120000);

setTimeout(function(){alert("If this is SUUUPER annoying then just admit defeat, scroll to the bottom and move to the next level")},140000);

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});

var piano = new Audio();
piano.src = "/AUDIO/piano.wav";

var partyHorn = new Audio();
partyHorn.src = "/AUDIO/party-horn.wav";

var trombone = new Audio();
trombone.src = "/AUDIO/trombone.wav";

var dizzyBirds = new Audio();
dizzyBirds.src = "/AUDIO/dizzy-birds.wav"

var ballon = new Audio();
ballon.src = "/AUDIO/ballon.wav"

var squeakyToy = new Audio();
squeakyToy.src = "/AUDIO/sqeaky-toy.wav"

var scaryNoise = new Audio();
scaryNoise.src = "/AUDIO/scary-noise.wav"

var loseNoise = new Audio();
loseNoise.src = "/AUDIO/lose-noise.wav"

var fart = new Audio();
fart.src = "/AUDIO/fart.wav"

var laugh = new Audio();
laugh.src = "/AUDIO/laugh.wav"

var boing = new Audio();
boing.src = "/AUDIO/boing.wav"

var breakDown = new Audio();
breakDown.src = "/AUDIO/break-down.wav"

var maleScream = new Audio();
maleScream.src = "/AUDIO/male-scream.wav"

var whistle = new Audio();
whistle.src = "/AUDIO/whistle.wav"

// var fallingWhistle = new Audio();
// fallingWhistle = "/AUDIO/falling-whistle.wav"
    
const button = document.querySelector(".button1");
const icon = document.querySelector(".button1 > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});

