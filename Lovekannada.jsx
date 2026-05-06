
export default function Loveenglish() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kaadhal home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💓 Love Notes – Feel Every Beat</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('romantic1', this)">💖 Latest Romance</button>
<button className="tab-btn" onclick="loadPlaylist('romantic2', this)">🎶 Soft Love Pop</button>
<button className="tab-btn" onclick="loadPlaylist('romantic3', this)">❤️ Chill Crush Vibes</button>
<button className="tab-btn" onclick="loadPlaylist('romantic4', this)">💘 Pure Romance</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💘 Your Heart’s Playlist</h3>
<p>Press play and fall in love again—with every lyric, every melody, every moment.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      romantic1: {
        id: "37i9dQZF1DX50QitC6Oqtn",
        title: "💖 Latest Romance",
        description: "The freshest and most trending love songs today."
      },
      romantic2: {
        id: "328DCP4z97cwmrD22k2j2t?si=KxXIBbClTvORXeicgRF5oA", 
        title: "🎶 Soft Love Pop",
        description: "Soft, catchy pop to fill your heart with emotion."
      },
      romantic3: {
        id: "4PStu9I5zd2QlzQsjL0mk4?si=QTFdUn_AQUaz4WUNeZgzRA", 
        title: "❤️ Chill Crush Vibes",
        description: "Chill and flirty vibes for your latest crush."
      },
      romantic4: {
        id: "1MthIFxNgK8irJQpaJTVH4?si=QT708RvqQlKz5dA5wKscMw", 
        title: "💘 Pure Romance",
        description: "Modern love stories wrapped in pop melodies."
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
