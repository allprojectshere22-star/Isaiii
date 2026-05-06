
export default function Sogatamil() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="Sogam home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>🌧️ Soga Puyal – Let the Pain Pour Like Rain</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('Ballads', this)">💖 Soga Puyal</button>
<button className="tab-btn" onclick="loadPlaylist('KadhalThunai', this)">🥀 Kadhal Thunai</button>
<button className="tab-btn" onclick="loadPlaylist('ThanimaiThedal', this)">💔 Thanimai Thedal</button>
<button className="tab-btn" onclick="loadPlaylist('MazhaiNenjil', this)">🌧 Mazhaiyil Nenjil</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🎻 Tamil Soulful Melodies for Broken Hearts</h3>
<p>When words fail, let these melodies speak your pain. From lonely nights to unspoken love, this playlist carries every tear in tune.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" id="spotify-player" src="https://open.spotify.com/embed/playlist/0AyOLKzLZZmlliok7bu1mp?si=CObGoxfgSfyxSdQnIEr7xg">
</iframe>
</div>
<div className="floating-notes" id="float-container"></div>
<script>
    const playlists = {
      Ballads: {
        id: "0AyOLKzLZZmlliok7bu1mp?si=CObGoxfgSfyxSdQnIEr7xg",
        title: "🎻 Tamil Soulful Melodies for Broken Hearts",
        description: "When words fail, let these melodies speak your pain. From lonely nights to unspoken love, this playlist carries every tear in tune."
      },
      KadhalThunai: {
        id: "37i9dQZF1DX3bcfiyW6qms?si=b4x_ryPnR-6YDg6ROoEoYQ",
        title: "🥀 Kadhal Thunai – Solitude in Love",
        description: "Feel the ache of waiting and longing, where each lyric hugs a lonely heart with bittersweet memories."
      },
      ThanimaiThedal: {
        id: "4c4spdFwXBKiFTqug4i0FK?si=_6AuttACRtezATiwRAm3jQ",
        title: "💔 Thanimai Thedal – Searching in Silence",
        description: "A playlist that captures the silence after love fades, echoing your search for what was lost."
      },
      MazhaiNenjil: {
        id: "1b28eTgS0RGdVPFVCkcR2w?si=MXmFVtK3RiK7cUnOfHCcmg",
        title: "🌧 Mazhaiyil Nenjil – Rain-Soaked Memories",
        description: "Let each raindrop blend with your tears, as these songs whisper tales of emotional downpours."
      }
    };

    function loadPlaylist(type, btn) {
      const playlist = playlists[type];
      const player = document.getElementById("spotify-player");
      const desc = document.getElementById("playlist-description");

      player.src = `https://open.spotify.com/embed/playlist/${playlist.id}`;
      desc.innerHTML = `<h3>${playlist.title}</h3><p>${playlist.description}</p>`;

      document.querySelectorAll('.tab-btn').forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
    }

    const emojis = ['🎶', '💔', '💖', '💕', '🥀'];
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
