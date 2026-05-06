
export default function Premam() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kaadhal home.html"><img alt="Back to Kaadhal" src="back arrow.png"/></a>
</div>
<h1>💓 Love Notes – Feel Every Beat</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('premam')">💖 Premam Songs</button>
<button className="tab-btn" onclick="loadPlaylist('heartbreak')">💔 Heartbreak Melodies</button>
<button className="tab-btn" onclick="loadPlaylist('romance2000s')">🎶  All time Romance</button>
<button className="tab-btn" onclick="loadPlaylist('evergreen')">🌿 Evergreen Romance</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💘 Your Heart’s Playlist</h3>
<p>Press play and fall in love again—with every lyric, every melody, every moment.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3lmpQSniUBH?si=vz8GGiYVT3ivVDuhOpDj4w">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      premam: {
        id: "37i9dQZF1DX3lmpQSniUBH?si=vz8GGiYVT3ivVDuhOpDj4w",
        title: "💖 Premam Songs",
        description: "Youthful, passionate Malayalam love tracks that make your heart skip a beat."
      },
      heartbreak: {
        id: "4t2gX3OWkkdy8vHiVrRXq7?si=OsnjxnQ9TjmxEow7mx1b4A",
        title: "💔 Heartbreak Melodies",
        description: "Emotional love songs to soothe your heart in times of longing and loss."
      },
      romance2000s: {
        id: "37i9dQZF1DXdgT9BVfflhb?si=SDbWIRIkQa684GDbL5OiPQ",
        title: "🎶 all time Romance",
        description: "Relive the golden era of 2000s with these nostalgic romantic gems."
      },
      evergreen: {
        id: "1NTgqLmK7epPufSu7Qidvh?si=TMLkOThHS4Oei1taPKZeKA",
        title: "🌿 Evergreen Romance",
        description: "Timeless Malayalam love songs that will forever remain in your heart."
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
      loadPlaylist('premam'); // default
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
