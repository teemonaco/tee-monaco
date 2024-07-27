document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("hero-video");
    const volumeIcon = document.getElementById("volume-icon");
  
    volumeIcon.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false;
        volumeIcon.classList.remove("fa-volume-mute");
        volumeIcon.classList.add("fa-volume-up");
      } else {
        video.muted = true;
        volumeIcon.classList.remove("fa-volume-up");
        volumeIcon.classList.add("fa-volume-mute");
      }
    });
  
    // Ensure video auto-plays on some browsers
    video.play().catch(error => {
      console.log('Autoplay prevented:', error);
      // Auto-play was prevented, show play button or notify user
    });
  });
  