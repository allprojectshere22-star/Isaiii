
export default function Kuthutamil() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="kuthu home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>Thara Local Kuthu Vibes – Full Volume, Full Energy!</h1>
<div className="playlist-tabs">
<button className="tab-btn active" onclick="loadPlaylist('kuthu')">🔥 Kuthu Beats</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>Thara Local Kuthu Vibes – Full Volume, Full Energy!</h3>
<p>Turn up the volume and let your feet take over! 
      This playlist is packed with unstoppable kuthu energy,
       perfect for street dance, celebrations, or just vibing solo like a hero.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/7s4xQbV3grZ9iAMEi4qEWN?si=9U1zugyfS4OAr535zkKjCg">
</iframe>
</div>
<script>
    const playlists = {
      kuthu: {
        id: "7s4xQbV3grZ9iAMEi4qEWN?si=9U1zugyfS4OAr535zkKjCg",
        title: "🔥 Ultimate Tamil Kuthu Playlist",
        description: "Turn up the volume and let your feet take over! This playlist is packed with unstoppable kuthu energy, perfect for street dance, celebrations, or just vibing solo like a hero."
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
      loadPlaylist('kuthu');
    });
  </script>
` }} />
  );
}
