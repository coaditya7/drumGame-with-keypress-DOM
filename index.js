// Mendapatkan jumlah tombol drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Fungsi untuk memutar audio
function playAudio(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

// Menambahkan event listener ke setiap tombol drum
for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInner = this.innerHTML;
        playSound(buttonInner);
        buttonAnimation(buttonInner);
    })
}

// Menambahkan event listener untuk tombol keyboard
document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

// Fungsi untuk memainkan suara berdasarkan tombol yang ditekan
function playSound(key){
    switch (key){
        case "w":
            playAudio("sounds/tom-1.mp3");
            break;
        case "a":
            playAudio("sounds/tom-2.mp3");
            break;
        case "s":
            playAudio("sounds/tom-3.mp3");
            break;
        case "d":
            playAudio("sounds/tom-4.mp3");
            break;
        case "j":
            playAudio("sounds/snare.mp3");
            break;
        case "k":
            playAudio("sounds/crash.mp3");
            break;
        case "l":
            playAudio("sounds/kick-bass.mp3");
            break;
    }
}

// Fungsi untuk animasi tombol yang ditekan
function buttonAnimation(currentKey){
    var activeButton =  document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
