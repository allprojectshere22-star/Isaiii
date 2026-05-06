
export default function Kuthumal() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kuthu home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>🎧 Mallu Pop Pulse – Thudippan Paattu!</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('mass')">🔥 Trending Malayalam</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>✨ Mass Melodies &amp; Grooves</h3>
<p>Catchy beats, urban vibes, and the energy of new-gen Malayalam hits — feel the rhythm, own the mood.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/7s4xQbV3grZ9iAMEi4qEWN?si=9U1zugyfS4OAr535zkKjCg">
</iframe>
</div>
<script>
    const playlists = {
      mass: {
        id: "0TDTiiM81qUIT3snRabYDf?si=54aGfs21QfaLIlYovQgbiQ",
        title: "✨ Mass Melodies & Grooves",
        description: "Catchy beats, urban vibes, and the energy of new-gen Malayalam hits — feel the rhythm, own the mood."
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
