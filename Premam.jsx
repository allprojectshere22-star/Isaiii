
export default function Index() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="app">
<h1 className="title">Lo-Fi Vibes 🎧</h1>
<div className="container">
<div className="mood-buttons">
<button className="mood-btn" onclick="setMood('chill')">Chill</button>
<button className="mood-btn" onclick="setMood('study')">Study</button>
<button className="mood-btn" onclick="setMood('rainy')">Rainy</button>
</div>
<div className="player-section">
<iframe allowfullscreen="" className="player" frameborder="0" id="player" src="https://open.spotify.com/track/3RVKJOoIVKXicFvNO7b2iK?si=a59128cfb9c44f83"></iframe>
</div>
<p className="quote" id="quote">“Peace begins with a deep breath.”</p>
</div>
</div>
<script>
    const moods = {
      chill: {
        url: "https://open.spotify.com/track/3RVKJOoIVKXicFvNO7b2iK?si=a59128cfb9c44f83",
        quote: "Peace begins with a deep breath."
      },
      study: {
        url: "https://www.youtube.com/embed/jfKfPyoutufyJRdk",
        quote: "Study like you're the main character."
      },
      rainy: {
        url: "https://www.youtube.com/emn_R0bed/DWcJFNfaw9c",
        quote: "Rain falls, thoughts flow."
      }
    };

    function setMood(mood) {
      const player = document.getElementById("player");
      const quote = document.getElementById("quote");
      player.src = moods[mood].url;
      quote.textContent = `“${moods[mood].quote}”`;
    }
  </script>
` }} />
  );
}
