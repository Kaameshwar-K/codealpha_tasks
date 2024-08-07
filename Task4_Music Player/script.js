document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Paths to local songs
    const song1Url = 'song1.mp3'; // Replace with the path to Song 1
    const song2Url = 'song2.mp3'; // Replace with the path to Song 2

    document.getElementById('playSong1').addEventListener('click', () => {
        playAudio(song1Url);
    });

    document.getElementById('playSong2').addEventListener('click', () => {
        playAudio(song2Url);
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            playAudio(url);
        }
    });

    function playAudio(url) {
        audio.src = url;
        audio.load();
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        currentTimeEl.textContent = currentTime;
        durationEl.textContent = duration;
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
    });

    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
