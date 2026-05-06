
export default function Partytamil() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="party home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>💃 Tamil Party Vibes – Beats That Bring the Floor Alive!</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('party')">🎉 Tamil Party Mix</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🎊 Non-Stop Tamil Party Hits</h3>
<p>Turn up the speakers and vibe with the hottest Tamil tracks for every celebration! From kuthu drops to dancefloor anthems — it's party time, nanba!</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0nA91dV2ts4?si=tPdIOW2XQoeaCxX7TYVO0g">
</iframe>
</div>
<script>
    const playlists = {
      party: {
        id: "37i9dQZF1DX0nA91dV2ts4?si=tPdIOW2XQoeaCxX7TYVO0g",
        title: "🎊 Non-Stop Tamil Party Hits",
        description: "Turn up the speakers and vibe with the hottest Tamil tracks for every celebration! From kuthu drops to dancefloor anthems — it's party time, nanba!"
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
      loadPlaylist('party');
    });
  </script>
` }} />
  );
}
