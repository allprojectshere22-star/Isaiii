
export default function Kadhaltamil() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kaadhal home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💓 Kaadhal Thendral – Love in Every Beat</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('romantic1', this)">💖 Romantic Melodies</button>
<button className="tab-btn" onclick="loadPlaylist('romantic2', this)">🌸 Kadhal Hits</button>
<button className="tab-btn" onclick="loadPlaylist('romantic3', this)">🎧 Heartfelt Love Hits</button>
<button className="tab-btn" onclick="loadPlaylist('romantic4', this)">❤️ Latest Trending Romance</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💘 Feel the Romance</h3>
<p>Let your heart sway to soulful Tamil love songs that whisper emotions.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/7s4xQbV3grZ9iAMEi4qEWN?si=9U1zugyfS4OAr535zkKjCg">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      romantic1: {
        id: "37i9dQZF1DWYfvJNWU1bKi?si=xSfSyi9DTbKHfyRhmt5MLw",
        title: "💘 Feel the Romance",
        description: "Let your heart sway to soulful Tamil love songs that whisper emotions."
      },
      romantic2: {
        id: "6mkGqTjxLkkSraARHhpHBq?si=qdsWTJH9QGaA2Oi3MDAWWA",
        title: "🌸 Kadhal Hits",
        description: "Top romantic hits that define modern Tamil love music."
      },
      romantic3: {
        id: "27iCFCXm21YOc5jEmIqZDD?si=ZcvAF0yeQnaQvXEDMT-jiw",
        title: "🎧 Heartfelt Love Hits",
        description: "Unforgettable melodies that never age — pure romance!"
      },
      romantic4: {
        id: "37i9dQZF1DWWWpLwNv0bd2?si=dI_Y7KFpQzS72CvvbL5Ulw",
        title: "❤️ Latest Trending Romance",
        description: "Fresh Tamil love songs trending across playlists now."
      }
    };

    function loadPlaylist(type, el) {
      const playlist = playlists[type];
      const player = document.getElementById("spotify-player");
      const desc = document.getElementById("playlist-description");

      player.src = `https://open.spotify.com/embed/playlist/${playlist.id}`;
      desc.innerHTML = `<h3>${playlist.title}</h3><p>${playlist.description}</p>`;

      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      el.classList.add('active');
    }

    // Auto load the first playlist on page load
    window.addEventListener('DOMContentLoaded', () => {
      const firstTab = document.querySelector('.tab-btn');
      if (firstTab) firstTab.click();
    });


     const emojis = ['😍', '🎶', '💕', '😘'];
    const floatContainer = document.getElementById("float-container");

    function createFloatingEmoji() {
      const emoji = document.createElement("div");
      emoji.className = "float-emoji";
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.animationDuration = 4 + Math.random() * 4 + "s";
      floatContainer.appendChild(emoji);
      setTimeout(() => emoji.remove(), 8000);
    }

    setInterval(createFloatingEmoji, 500);
      event.target.classList.add('active');
    window.addEventListener('DOMContentLoaded', () => {
      loadPlaylist('romantic');
    });
  </script>
` }} />
  );
}
