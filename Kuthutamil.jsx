
export default function Page90Shome() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<h1>90s Puyal</h1>
<div className="language-container">
<div className="lang-card"><a href="90s tamil.html">Tamil</a></div>
<div className="lang-card"><a href="90s eng.html">English</a></div>
<div className="lang-card"><a href="90s mal.html">Malayalam</a></div>
<div className="lang-card"><a href="90s telu.html">Telugu</a></div>
<div className="lang-card"><a href="90s kann.html">Kannada</a></div>
</div>
<div className="cta-box">
<h2>Back to the Golden Melodies of the 90s</h2>
<p>Travel back in time where love was poetic, music was magic,
     and Kuyil voice ruled our radios. Relive the era that made us feel... purely.</p>
</div>
<div className="footer">
    © 2025 Kaadhal Thendral | <a href="#">Privacy Policy</a> | <a href="#">Contact</a>
</div>
` }} />
  );
}
