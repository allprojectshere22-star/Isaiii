
export default function Page90Seng() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="90s home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>🎸 90s Rock Revival – Amp Up the Attitude</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('rock')">🎸 Rock Essentials</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🔥 Grunge, Grit &amp; Guitar Solos</h3>
<p>Take a trip back to flannel shirts and distorted power chords. 
        Relive the raw energy of 90s rock that redefined rebellion and made noise beautiful.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U">
</iframe>
</div>
<script>
    const playlists = {
      rock: {
        id: "37i9dQZF1DWXRqgorJj26U",
        title: "Grunge, Grit & Guitar Solos",
        description: "Take a trip back to flannel shirts and distorted power chords Relive the raw energy of 90s rock that redefined rebellion and made noise beautiful"
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
      loadPlaylist('rock');
    });
  </script>
` }} />
  );
}
