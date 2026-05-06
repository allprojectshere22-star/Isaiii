
export default function Popenglish() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kuthu home.html"><img alt="Back" src="back arrow.png"/></a>
</div>
<h1>🎶 Pop Pulse – Feel Every Vibe</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('pop')">🌟 Pop Hits</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🔥 Today's Top Pop</h3>
<p>Turn up the volume and ride the wave of global pop sensations — from viral bangers to soulful chart-toppers.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M">
</iframe>
</div>
<script>
    const playlists = {
      pop: {
        id: "37i9dQZF1DXcBWIGoYBM5M",
        title: "🔥 Today's Top Pop",
        description: "Turn up the volume and ride the wave of global pop sensations — from viral bangers to soulful chart-toppers."
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
      loadPlaylist('pop');
    });
  </script>
` }} />
  );
}
