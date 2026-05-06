
export default function Lovekannada() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kaadhal home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💞 Prema Sanchari – Journey of Love</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('romantic1')">💖 Romantic Mix</button>
<button className="tab-btn" onclick="loadPlaylist('romantic2')">🌹 Love Ballads</button>
<button className="tab-btn" onclick="loadPlaylist('romantic3')">💕 Heartfelt Duets</button>
<button className="tab-btn" onclick="loadPlaylist('romantic4')">❤️ Melodic Romance</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💖 Romantic Mix</h3>
<p>Sandalwood's finest romantic numbers to sweeten your soul.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/PLACEHOLDER1">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      romantic1: {
        id: "1e0UsAiG6FoTmkMvV7TF14?si=18LrgZj6Siis_ysbZy9s-Q",
        title: "💖 Romantic Mix",
        description: "Sandalwood's finest romantic numbers to sweeten your soul."
      },
      romantic2: {
        id: "0ClDPAJ8jtMQlqnTPSTgLp?si=FYGCVIkHQo-z4YbLUFi4Bg",
        title: "🌹 Love Ballads",
        description: "Soul-stirring Kannada ballads for the love-struck heart."
      },
      romantic3: {
        id: "3d1XYfF92iHxT94OONEaKn?si=PUS6FDzYSsKgvcxmwTMZkg",
        title: "💕 Heartfelt Duets",
        description: "Enchanting duets from Kannada cinema that speak of love."
      },
      romantic4: {
        id: "6utix5lfPoZkBirWlRujqa?si=1X0ZPUQCTUmq-tiGsjNtBQ",
        title: "❤️ Melodic Romance",
        description: "Soft, melodic romantic tracks to set a dreamy mood."
      }
    };
    function loadPlaylist(type) {
      const p = playlists[type];
      document.getElementById("spotify-player").src =
        `https://open.spotify.com/embed/playlist/${p.id}`;
      document.getElementById("playlist-description").innerHTML =
        `<h3>${p.title}</h3><p>${p.description}</p>`;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
    }
    window.addEventListener('DOMContentLoaded', () => loadPlaylist('romantic1'));

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
