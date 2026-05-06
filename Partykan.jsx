
export default function Page90Stelu() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="90s home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>🎶 90s Telugu Vintages – Melody That Stays Forever</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('classics')">🌿 Golden Telugu</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🌸 Echoes of the Golden Era</h3>
<p>SPB’s golden voice, Chitra’s soulful notes, and melodies from Ilaiyaraaja to Mani Sharma — rewind to the magic that made every 90s heart skip a beat.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcrFZ8UTtxv9?si=5kyXQT8kRvediKmhCa7Kgw">
</iframe>
</div>
<script>
    const playlists = {
      classics: {
        id: "37i9dQZF1DXcrFZ8UTtxv9?si=5kyXQT8kRvediKmhCa7Kgw",
        title: "🌿 Golden Telugu",
        description: "Timeless Telugu hits from the golden 90s era – melody that lingers in every memory."
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
      loadPlaylist('classics');
    });
  </script>
` }} />
  );
}
