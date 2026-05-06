
export default function Partyhome() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>Therikka Vidalama?</h1>
<div className="language-container">
<div className="lang-card"><a href="party tamil.html">Tamil</a></div>
<div className="lang-card"><a href="pop english.html">English</a></div>
<div className="lang-card"><a href="party mal.html">Malayalam</a></div>
<div className="lang-card"><a href="party telu.html">Telugu</a></div>
<div className="lang-card"><a href="party kan.html">Kannada</a></div>
</div>
<div className="cta-box">
<h2>🔥 Lights On, Volume Max, Vibe Unlocked!</h2>
<p>Whether it’s rooftop raves or roadside dance-offs,
     this is your ultimate Tamil party zone. Thara local beats only — no boring vibes allowed!</p>
</div>
<div className="footer">
    © 2025 Kaadhal Thendral | <a href="#">Privacy Policy</a> | <a href="#">Contact</a>
</div>
` }} />
  );
}
