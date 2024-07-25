document.getElementById('unmute-button').addEventListener('click', function() {
    var video = document.getElementById('background-video');
    video.muted = false;
    video.play().then(() => {
        document.getElementById('unmute-button').style.display = 'none';
        document.getElementById('mute-button').style.display = 'inline';
    }).catch(error => {
        console.error('Error trying to play the video:', error);
    });
});

document.getElementById('unmute-button').addEventListener('touchend', function() {
    var video = document.getElementById('background-video');
    video.muted = false;
    video.play().then(() => {
        document.getElementById('unmute-button').style.display = 'none';
        document.getElementById('mute-button').style.display = 'inline';
    }).catch(error => {
        console.error('Error trying to play the video:', error);
    });
});

document.getElementById('mute-button').addEventListener('click', function() {
    var video = document.getElementById('background-video');
    video.muted = true;
    document.getElementById('mute-button').style.display = 'none';
    document.getElementById('unmute-button').style.display = 'inline';
});

document.getElementById('mute-button').addEventListener('touchend', function() {
    var video = document.getElementById('background-video');
    video.muted = true;
    document.getElementById('mute-button').style.display = 'none';
    document.getElementById('unmute-button').style.display = 'inline';
});
