
export default function English() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="Home.html"><img alt="Back to Home" src="back arrow.jfif"/></a>
</div>
<h1>🎵 English Vibes - Spotify Edition</h1>
<!-- Playlist Tabs -->
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('party')">🎉 Party Vibes</button>
</div>
<!-- Playlist Info -->
<div className="playlist-info" id="playlist-description">
<h3>🌟 Top Pop Hits</h3>
<p>Today's trending pop songs from global charts</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M">
</iframe>
</div>
<script>
    const playlists = {
     
      party: {
        id: "37i9dQZF1DXaXB8fQg7xif",
        title: "🎉 Party Vibes",
        description: "Ultimate English party anthems to get lit"
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
      loadPlaylist('pop');
    });
  </script>
` }} />
  );
}
