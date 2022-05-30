let music = new Audio("static/bg-sound.mp3");
let text_music_button = document.getElementById("m_b");
let flag = false;

function cli() {
    console.log("AA")
    if (flag === false) {
        music.play();
        music.volume = 0.1;
        music.loop = true;
        flag = true;
        text_music_button.innerText = "♫ Выключить музыку";
    }
    else if (flag === true) {
        music.pause();
        flag = false;
        text_music_button.innerText = "♫ Включить музыку"
    }
}





































