
export default function Partymal() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="Home.html"><img alt="Back to Home" src="back arrow.jfif"/></a>
</div>
<h1>🎶 Mallu 90s Paattu Vibes – Chenda Melam Mode On!</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('party')">Party Mix</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🥁 Thaalam Kettu, Paattu Thudikkum!</h3>
<p>Punchy Malayalam tracks to boost your energy</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0L49JehX6ZU">
</iframe>
</div>
<script>
    const playlists = {
      
     
      party: {
        id: "37i9dQZF1DX7ko3EzbLi5w?si=hGrASW7QTQSWjSCuBngshQ",
        title: "🎉 Malayalam Party Hits",
        description: "Latest Malayalam party bangers"
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
