
export default function Page90Stamil() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="90s home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>🎧 Tamil 90's Collection – Feel the Retro Magic</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('evergreen')">🌿 Evergreen Classics</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>Tamil 90s Playlist</h3>
<p>From Ilaiyaraaja's soul-touching tunes to A.R. Rahman's fresh beats – rewind your heart to the magical 90s. Grab a filter coffee, close your eyes, and let the nostalgia take over.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/6FLheySEeALHtKK51eQGxU?si=rsQyd43CQNiaioa5ybPZ1A">
</iframe>
</div>
<script>
    const playlists = {
      evergreen: {
        id: "6FLheySEeALHtKK51eQGxU?si=rsQyd43CQNiaioa5ybPZ1A",
        title: "🌿 Tamil Evergreen Classics",
        description: "Timeless Tamil melodies from the golden era – relive the romance, rain, and rhythm of the unforgettable 90s."
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
      loadPlaylist('evergreen');
    });
  </script>
` }} />
  );
}
