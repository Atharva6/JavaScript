let song = document.getElementById('mySong');
let icon = document.getElementById('icon');

function togglehide(){
    if(mySong.paused)
    {
        mySong.play();
        icon.src = "img/pause.png";
    }
    else{
        mySong.pause();
        icon.src = "img/play.png";
    }
}