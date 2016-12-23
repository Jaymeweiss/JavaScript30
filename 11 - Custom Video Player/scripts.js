const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playerButton = document.querySelector('.toggle');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

//there is probably no need to access these separately like this as we will be performing the same operatin on them with the value stored in the data-skip attribute
// const skip10Button = player.querySelector('button[data-skip="-10"]');
// console.log(skip10Button);
// const skip25Button = player.querySelector('button[data-skip="25"]');
// console.log(skip25Button);

//the same goes for the ranges 
// const volumeRange = document.querySelector('input[name="volume"]');
// const playbackRateRange = document.querySelector('input[name="playbackRate"]');

const ranges = player.querySelector('.player__slider')

const skipButtons = player.querySelector('[data-skip]');

function togglePlay() {
    //test this to see if this would work
    video.paused ? video.play() : video.pause();
    
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }

    //or I could use Wes's option of 
    // const method = video.paused ? 'play' : 'puase';
    // video[method]();
    //however, I do agree with it being harder to read and understand - it is cleaner though
}

function updateButtonIcon() {
    const icon = this.paused ? '►' : '❚ ❚';
    playerButton.textContent = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButtonIcon);
video.addEventListener('pause', updateButtonIcon);
playerButton.addEventListener('click', togglePlay);

//I like the idea of listening to the video for it being paused or not and not dictating the alteration of the button icon based on our clicking of it

