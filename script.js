const play = document.getElementById('play');
const media = document.querySelector('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const musicImage = document.querySelector('img');
const progressBar = document.getElementById('progress-bar');
const durationBar = document.getElementById('duration-progress');
const currentTime = document.getElementById('current-time');
const totalTime = document.getElementById('total-time');
const musicArray = [
    {
        music : 'music/music 1.mp3',
        pic : 'pic/pic 1.jpg',
        name : 'Chanan Kumar'
    },
    {
        music : 'music/music 2.mp3',
        pic : 'pic/pic 2.jpg',
        name : 'Chanan Kumar'
    },
    {
        music : 'music/music 3.mp3',
        pic : 'pic/pic 3.jpg',
        name : 'Chanan Kumar'
    },
    {
        music : 'music/music 4.mp3',
        pic : 'pic/pic 4.jpg',
        name : 'Chanan Kumar'
    },
]

let isPlaying = false;
let counter = 1;
function toggleMusic () {
    if(!isPlaying) {
        playMusic();
    }else {
        pauseMusic();
    }
}

function playMusic () {
    media.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title','Pause');
    isPlaying = true;
}
function pauseMusic () {
    media.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title','Play');
    isPlaying = false;
}
function nextSong () {
    if(counter === 4){
        counter = 1;
    } else {
        counter++;
    }

    media.src = `music/music ${counter}.mp3`
    musicImage.src = `pic/pic ${counter}.jpg`
    playMusic();
}
function prevSong () {
    if(counter === 1){
        counter = 4;
    } else {
        counter--;
    }

    media.src = `music/music ${counter}.mp3`
    musicImage.src = `pic/pic ${counter}.jpg`
    playMusic();
}

function updateProgressBar(e) {
    if (isPlaying) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      durationBar.style.width = `${progressPercent}%`;
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }
      if (durationSeconds) {
        totalTime.textContent = `${durationMinutes}:${durationSeconds}`;
      }
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }
      currentTime.textContent = `${currentMinutes}:${currentSeconds}`;
    }
  }
  
  function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = media;
    media.currentTime = (clickX / width) * duration;
  }

play.addEventListener('click',toggleMusic);
nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong);
media.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', setProgressBar);

