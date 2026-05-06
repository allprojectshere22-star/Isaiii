
export default function Page90Skann() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button1">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<div className="back-button">
<a href="90s home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>🎶 90’s Kannada Golden Melodies</h1>
<div className="playlist-tabs">
<button className="tab-btn" onclick="loadPlaylist('evergreen')">🌿 Evergreen</button>
</div>
<div className="playlist-info" id="playlist-description">
<h3>🌸 Melody that Echoes Forever</h3>
<p>From the magical voice of Dr. Rajkumar to the soulful music of Hamsalekha — step into the charm of 90s Karnataka where every lyric held emotion and every tune told a story.</p>
</div>
<div className="player-container">
<iframe allow="encrypted-media" allowtransparency="true" frameborder="0" id="spotify-player" src="https://open.spotify.com/embed/playlist/4JWU0YQY0na5VSIw5uecJx?si=2V38tWobTOacWjPr8KpKhQ">
</iframe>
</div>
<script>
    const playlists = {
      evergreen: {
        id: "4JWU0YQY0na5VSIw5uecJx?si=2V38tWobTOacWjPr8KpKhQ",
        title: "🌿 Evergreen Kannada",
        description: "Timeless Kannada tracks that defined the 90s — emotional, melodic, and unforgettable."
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
