
export default function Kuthukann() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kuthu home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>🔥 Kannada Dhamaka – Mass Beat Marana!</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('mass')">💥 Mass Hits</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💣 Ooru Style Dappankuthu</h3>
<p>Kannada kuthu that hits hard! Galli-level swag, drum kicks, and total dance floor madness. Ee beat nodi enjoy maadi!</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2cUUM2B0tMS?si=lqO5mmJUQzaELgIRHwv3JA">
</iframe>
</div>
<script>
    const playlists = {
      mass: {
        id: "37i9dQZF1DX2cUUM2B0tMS?si=lqO5mmJUQzaELgIRHwv3JA",
        title: "💣 Ooru Style Dappankuthu",
        description: "Kannada kuthu that hits hard! Galli-level swag, drum kicks, and total dance floor madness. Ee beat nodi enjoy maadi!"
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
