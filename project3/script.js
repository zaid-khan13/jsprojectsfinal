const video = document.querySelector("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Create function for clicking on video
function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Create function for updating the play / pause icons
function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  }
}

// Create function to update the progress
function updateProgress() {
  // Update slider
  progress.value = (video.currentTime / video.duration) * 100;

  // Update timestamp
  // Rounding down the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = `0` + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = `0` + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Create function to stop the video
function stopVideo() {
    video.currentTime = 0;
  video.pause();
}

// Create function to update the video progress using the slider
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

// Event Listeners
// 1. Event listener for video player
video.addEventListener("click", toggleVideo);
video.addEventListener("pause", updateIcon);
video.addEventListener("play", updateIcon);
video.addEventListener("timeupdate", updateProgress);

// 2. Event listener for play button
play.addEventListener("click", toggleVideo);


// 3. Event listner for stop button
stop.addEventListener("click", stopVideo);

// 4. Event listener for progress bar
progress.addEventListener("change", setVideoProgress);