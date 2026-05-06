
export default function Signin() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="Home.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<div className="signin-box">
<h2>Sign In to Kaadhal Thendral</h2>
<form action="#">
<input placeholder="Email" required="" type="email"/>
<input placeholder="Password" required="" type="password"/>
<button type="submit">Sign In</button>
</form>
<p>Don't have an account? <a href="register.html">Register</a></p>
</div>
<script>
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]');
    const password = document.querySelector('input[type="password"]');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!email.value.trim() || !password.value.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
s
    alert("Login successful! Redirecting...");

    window.location.href = "celeb.html"; 
  });
</script>
` }} />
  );
}
