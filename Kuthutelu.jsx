
export default function Sadtelu() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="Sogam home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💔 Nuvvu Leni Lokam – A World Without You</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('sad1')">😔 Nee Oohalatho</button>
<button className="tab-btn" onclick="loadPlaylist('sad2')">😢 Tholi Valape</button>
<button className="tab-btn" onclick="loadPlaylist('sad3')">😭 Kalavarinche Kshanalu</button>
<button className="tab-btn" onclick="loadPlaylist('sad4')">😞 Aashaalu Kalavale</button>
</div>
<div className="playlist-info" id="playlist-description"></div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" id="spotify-player" src=""></iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      sad1: {
        id: "37i9dQZF1DWUEWjDsV7AgX",
        title: "Nee Oohalatho Kalipina Gaanalu",
        description: "Tunes that ache with memories and whisper names we never forgot."
      },
      sad2: {
        id: "5aIrutl5Sr4WPvvFyMeNKN?si=cx4Q6NqxQlyR_LvbUX7NXw",
        title: "Tholi Valape - First Love's Echo",
        description: "Relive the bittersweet pain of a love that never left your heart."
      },
      sad3: {
        id: "1pXBDHNIieZ1CWJDWfmE4Z?si=uVikQD0iTVOaxPcHmoLDJQ",
        title: "Kalavarinche Kshanalu",
        description: "Moments that promised forever, now just echoes in your soul."
      },
      sad4: {
        id: "4QUArRyv9Ltw8cwwap8wkI?si=5WEAg7gcS06tiS-63tGIiA",
        title: "Aashaalu Kalavale",
        description: "Hopes entangled in heartbreak, where love and tears entwine."
      }
    };

    function loadPlaylist(type) {
      const playlist = playlists[type];
      document.getElementById("spotify-player").src = `https://open.spotify.com/embed/playlist/${playlist.id}`;
      document.getElementById("playlist-description").innerHTML = `<h3>${playlist.title}</h3><p>${playlist.description}</p>`;
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
    }

    window.addEventListener('DOMContentLoaded', () => loadPlaylist('sad1'));

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
