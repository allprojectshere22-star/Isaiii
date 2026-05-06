
export default function Partykan() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="Home.html"><img alt="Back to Home" src="back arrow.jfif"/></a>
</div>
<h1>🔥 Kannada 90s Utsava Beats – Halli to Party Mode!</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('folk')">🥁 Folk Vibes</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>💥 Kannada Mass Hits</h3>
<p>Power-packed Kannada hits to fire up your day</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYJl9SGBYjoz">
</iframe>
</div>
<script>
    const playlists = {
      
     
     
      
      folk: {
        id: "37i9dQZF1DWZqTcNLmb3sH?si=nKTzR1knTdeETXL7txXY6A",
        title: "🥁 Kannada Folk Vibes",
        description: "Rhythmic folk beats and native Kannada tunes"
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
      loadPlaylist('mass');
    });
  </script>
` }} />
  );
}
