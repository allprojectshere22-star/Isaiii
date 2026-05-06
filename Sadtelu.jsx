
export default function Sadeng() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="Sogam home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💔 English Sad Songs – Echoes of the Heart</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('sad')">😔 Sad &amp; Chill</button>
<button className="tab-btn" onclick="loadPlaylist('heartbreak')">💔 Heartbreak Ballads</button>
<button className="tab-btn" onclick="loadPlaylist('alone')">🌧 Alone Time</button>
<button className="tab-btn" onclick="loadPlaylist('lateNight')">🌙 Late Night Tears</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>😔 Sad &amp; Chill</h3>
<p>Mellow English tracks for a quiet, emotional moment.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      sad: {
        id: "37i9dQZF1DX7qK8ma5wgG1",
        title: "😔 Sad & Chill",
        description: "Mellow English tracks for a quiet, emotional moment."
      },
      heartbreak: {
        id: "37i9dQZF1DWZUAeYvs88zc",
        title: "💔 Heartbreak Ballads",
        description: "Heart-wrenching songs that echo every breakup you've ever felt."
      },
      alone: {
        id: "37i9dQZF1DX7gIoKXt0gmx",
        title: "🌧 Alone Time",
        description: "Perfect companion for your lonely evenings."
      },
      lateNight: {
        id: "25ZzkJkOuYir9kHr2CqwPQ?si=T921gqjcQ12YfoTLE7Mahw",
        title: "🌙 Late Night Tears",
        description: "Let it all out with these late-night sob sessions."
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

    window.addEventListener('DOMContentLoaded', () => {
      loadPlaylist('sad');
    });
  </script>
` }} />
  );
}
