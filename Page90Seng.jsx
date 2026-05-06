
export default function Sogamhome() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>Soga Thendral</h1>
<div className="language-container">
<div className="lang-card"><a href="soga tamil.html">Tamil</a></div>
<div className="lang-card"><a href="sad eng.html">English</a></div>
<div className="lang-card"><a href="sad mala.html">Malayalam</a></div>
<div className="lang-card"><a href="sad telu.html">Telugu</a></div>
<div className="lang-card"><a href="sad kann.html">Kannada</a></div>
</div>
<div className="cta-box">
<h2>When Melodies Mourn and Memories Speak</h2>
<p>Enter the storm of silence, where each song is a tear unshed and every
     lyric lingers like a lost goodbye. This is your safe space to feel, remember, 
     and heal — one soulful note at a time.</p>
</div>
<div className="footer">
    © 2025 Kaadhal Thendral | <a href="#">Privacy Policy</a> | <a href="#">Contact</a>
</div>
` }} />
  );
}
