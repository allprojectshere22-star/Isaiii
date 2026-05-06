
export default function Kuthuhome() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>Thara Local Songs</h1>
<div className="language-container">
<div className="lang-card"><a href="kuthu tamil.html">Tamil</a></div>
<div className="lang-card"><a href="pop english.html">English</a></div>
<div className="lang-card"><a href="kuthu mal.html">Malayalam</a></div>
<div className="lang-card"><a href="kuthu telu.html">Telugu</a></div>
<div className="lang-card"><a href="kuthu kann.html">Kannada</a></div>
</div>
<div className="cta-box">
<h2>Thara Local Beats, Vera Maari Energy!</h2>
<p>Get ready to vibe like it's a kuthu street fest! Whether you're dancing in slippers or on rooftops, this is the place for raw rhythms, loud beats, and full-on theri moments. 🔥💃</p>
</div>
<div className="footer">
    © 2025 Kaadhal Thendral | <a href="#">Privacy Policy</a> | <a href="#">Contact</a>
</div>
` }} />
  );
}
