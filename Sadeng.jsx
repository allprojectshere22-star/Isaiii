
export default function Romancetelugu() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kaadhal home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>🎶 Madhuram Vibes – Telugu Love Magic</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('romantic')">💞 Romantic Melodies</button>
<button className="tab-btn" onclick="loadPlaylist('chill')">💖 Chill Love Beats</button>
<button className="tab-btn" onclick="loadPlaylist('evening')">🌅 Evening Vibes</button>
<button className="tab-btn" onclick="loadPlaylist('classics')">🎤 Trending Now</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>❤️ Fall in Love, Andhra Style</h3>
<p>From soft vocals to soul-stirring lyrics, these tracks bring the Telugu heart to life.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX44F1QWqYoaV?si=zl6wSIxJR8-k1yjVMksPrg">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      romantic: {
        id: "37i9dQZF1DX44F1QWqYoaV",
        title: "💞 Telugu Romantic Melodies",
        description: "From soft vocals to soul-stirring lyrics, these tracks bring the Telugu heart to life."
      },
      chill: {
        id: "01qo5VN1AKO385vYeDpvsJ?si=5bKm82szSKOG37647KpT3g", 
        title: "💖 Telugu Chill Love Beats",
        description: "Smooth rhythms and chill vibes for cozy Telugu evenings."
      },
      evening: {
        id: "7jCOTOc9NBy41S7Uf4xfU1?si=LNYSNXqESyWnK8cdgrkDfQ", 
        title: "🌅 Evening Vibes – Telugu Love",
        description: "Perfect companion for sunsets and heartful moments."
      },
      classics: {
        id: "37i9dQZF1DWTt3gMo0DLxA?si=cipfuIXHT6KCbvKXcDciEg",
        title: "🎤 Trending now",
        description: "Evergreen melodies that defined love through decades."
      }
    };

    function loadPlaylist(type) {
      const playlist = playlists[type];
      const player = document.getElementById("spotify-player");
      const desc = document.getElementById("playlist-description");

      player.src = `https://open.spotify.com/embed/playlist/${playlist.id}`;
      desc.innerHTML = `<h3>${playlist.title}</h3><p>${playlist.description}</p>`;

      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
    }

    window.addEventListener('DOMContentLoaded', () => {
      loadPlaylist('romantic');
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
