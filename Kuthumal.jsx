
export default function Sadmala() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="Sogam home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💔 Manasil Oru Mazha – A Rain That Falls Inside</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('sad1')">Silent Storm</button>
<button className="tab-btn" onclick="loadPlaylist('sad2')">Wounded Words</button>
<button className="tab-btn" onclick="loadPlaylist('sad3')">Lost Letters</button>
<button className="tab-btn" onclick="loadPlaylist('sad4')">Raindrops &amp; Regrets</button>
</div>
<div className="playlist-info" id="playlist-description"></div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" id="spotify-player" src=""></iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      sad1: {
        id: "4f2Z9SL9zHV3Fy9VNmsQwa",
        title: "💧 Silent Storm",
        description: "Every lyric echoes a pain unsaid. Let it out with these soulful Malayalam ballads."
      },
      sad2: {
        id: "37i9dQZF1DWTUHWFuSB3lg?si=4o5A7ICHShGs2NStax-Oig",
        title: "📜 Wounded Words",
        description: "For those nights where words fail but melodies speak."
      },
      sad3: {
        id: "3wRNT8SNxVOEnj9Vo0vdOq?si=g-5ggIWTQxWVc6fnmrbVEQ",
        title: "💌 Lost Letters",
        description: "Songs that feel like unread letters and broken promises."
      },
      sad4: {
        id: "6kfoDVPM2CJkXieOAeCLfQ?si=81D4OsqdRmeFwz-d5jHt1Q",
        title: "☔ Raindrops & Regrets",
        description: "Melancholy woven with nostalgia. Cry it out, note by note."
      }
    };

    function loadPlaylist(type) {
      const playlist = playlists[type];
      document.getElementById("spotify-player").src = `https://open.spotify.com/embed/playlist/${playlist.id}`;
      document.getElementById("playlist-description").innerHTML =
        `<h3>${playlist.title}</h3><p>${playlist.description}</p>`;

      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
    }

    // Load first playlist by default
    window.addEventListener('DOMContentLoaded', () => {
      loadPlaylist('sad1');
    });

    // Floating emoji animation
    const emojis = ['😫', '🎶', '😭', '💔'];
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
