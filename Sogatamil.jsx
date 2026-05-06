
export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="home.html"><img alt="Back to Home" src="home.png"/></a>
</div>
<h1>காற்றின் இசை</h1>
<div className="language-container">
<div className="lang-card"><a href="celeb.html">Celebrity Grooves</a></div>
<div className="lang-card"><a href="singers.html">Singer Spotlight</a></div>
<div className="lang-card"><a href="kaadhal home.html">Kaadhal Salanam</a></div>
<div className="lang-card"><a href="Sogam home.html">Soga Thendral</a></div>
<div className="lang-card"><a href="kuthu home.html">Thara Local Songs</a></div>
<div className="lang-card"><a href="90s home.html">90's Puyal</a></div>
<div className="lang-card"><a href="party home.html">Therikka Vidalama?</a></div>
</div>
<div className="cta-box">
<h2>Feel the Beat. Feel the Emotion.</h2>
<p>Dive into curated vibes across genres — whether it’s kuthu fire,
       love rain, or 90s magic. Your soundtrack starts here.</p>
<a href="signin.html">Sign In / Register</a>
</div>
<div className="footer">
    © 2025 Nilavu Isai | <a href="#">Privacy Policy</a> | <a href="contact.html">Contact</a>
</div>
` }} />
  );
}
