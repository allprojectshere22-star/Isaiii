
export default function Kaadhalhome() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>Kaadhal Salanam</h1>
<div className="language-container">
<div className="lang-card"><a href="kadhal tamil.html">Tamil</a></div>
<div className="lang-card"><a href="love english.html">English</a></div>
<div className="lang-card"><a href="premam.html">Malayalam</a></div>
<div className="lang-card"><a href="romance telugu.html">Telugu</a></div>
<div className="lang-card"><a href="love kannada.html">Kannada</a></div>
</div>
<div className="cta-box">
<h2>Where Every Song Whispers "Kaadhal"</h2>
<p>Let the breeze carry you through timeless melodies, stolen glances
    , and moonlit memories. This is your space, where love flows through lyrics and every heartbeat 
    is a verse.</p>
</div>

<div className="footer">
    © 2025 Kaadhal Thendral | <a href="#">Privacy Policy</a> | <a href="#">Contact</a>
</div>
` }} />
  );
}
