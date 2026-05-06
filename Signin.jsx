
export default function Sadkann() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="Sogam home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💔 Ninna Nenedare – A Heart That Echoes</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('playlist1', event)">💔 Ninna Nenedare</button>
<button className="tab-btn" onclick="loadPlaylist('playlist2', event)">😢 Ellide Ninna Hesaru</button>
<button className="tab-btn" onclick="loadPlaylist('playlist3', event)">😭 Kanasalli Ninna</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💔 Ninna Nenedare</h3>
<p>When memories hurt softly—these melodies carry the echoes of your absence.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX74BzJSsfdGA">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      playlist1: {
        id: "37i9dQZF1DX74BzJSsfdGA",
        title: "💔 Ninna Nenedare",
        description: "When memories hurt softly—these melodies carry the echoes of your absence."
      },
      playlist2: {
        id: "6vO2xd2Ks0bwsydkYkLLqD?si=MEKEsT7WT8WPZeum0TsZsQ",
        title: "😢 Ellide Ninna Hesaru",
        description: "Searching for your name in the silence of every verse."
      },
      playlist3: {
        id: "2mUU9L3apvuJWy6HggtJXI?si=W1inILTzSbS-M6OQf9xH4A",
        title: "😭 Kanasalli Ninna",
        description: "A dream of you, fading like mist in the morning."
      }
    };

    function loadPlaylist(type, event) {
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

    // Set default playlist
    window.addEventListener('DOMContentLoaded', () => {
      loadPlaylist('playlist1', { target: document.querySelector('.tab-btn') });
    });

    // Floating emojis
    const emojis = ['😫', '🎶', '😭', '😔'];
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
  </script>
` }} />
  );
}
