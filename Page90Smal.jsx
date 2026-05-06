
export default function Kuthutelu() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kuthu home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>💥 Telugu Beat Blast – Dhoom Dhaam Vibes!</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('mass')">🔥 Mass Hits</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💃 Massu Moves &amp; Fire Tracks</h3>
<p>Pakka local beats, full-on energy, and dance-floor kuthu power! Let’s set the floor on fire, Telugu style.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5EbPl0mQHmo?si=6gmx7_YOQ7mihgK_Hh2bTw">
</iframe>
</div>
<script>
    const playlists = {
       mass: {
        id: "37i9dQZF1DX5EbPl0mQHmo?si=6gmx7_YOQ7mihgK_Hh2bTw",
        title: "💃 Massu Moves & Fire Tracks",
        description: "Pakka local beats, full-on energy, and dance-floor kuthu power! Let’s set the floor on fire, Telugu style."
      },
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
      loadPlaylist('mass');
    });
  </script>
` }} />
  );
}
