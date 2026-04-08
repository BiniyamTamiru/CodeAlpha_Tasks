const songs = [
  {
    title: "Song 1",
    artist: "Artist A",
    src: "Music/ma.mp3"
  },
  {
    title: "Song 2",
    artist: "Artist B",
    src: "Music/mn_yhun.mp3"
  },
  {
    title: "Song 3",
    artist: "Artist C",
    src: "Music/ma.mp3"
    
  }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const playlistEl = document.getElementById("playlist");

// Load Song
function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
}

loadSong(currentSong);

// Play / Pause
function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}


// Next Song
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}

// Previous Song
function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

// Update Progress
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;

  // Time display
  let min = Math.floor(audio.currentTime / 60);
  let sec = Math.floor(audio.currentTime % 60);
  currentTimeEl.textContent = `${min}:${sec < 10 ? "0" + sec : sec}`;

  let dmin = Math.floor(audio.duration / 60) || 0;
  let dsec = Math.floor(audio.duration % 60) || 0;
  durationEl.textContent = `${dmin}:${dsec < 10 ? "0" + dsec : dsec}`;
});

// Seek
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Autoplay next
audio.addEventListener("ended", nextSong);

// Playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = `${song.title} - ${song.artist}`;
  li.onclick = () => {
    currentSong = index;
    loadSong(currentSong);
    audio.play();
  };
  playlistEl.appendChild(li);
});