
export default function Register() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div className="back-button">
<a href="signin.html"><img alt="Back to Home" src="back arrow.png"/></a>
</div>
<div className="register-box">
<h2>Create Your Account</h2>
<form action="#">
<input placeholder="Full Name" required="" type="text"/>
<input placeholder="Email" required="" type="email"/>
<input placeholder="Password" required="" type="password"/>
<input placeholder="Confirm Password" required="" type="password"/>
<a href="home.html"><button type="submit">Register</button></a>
</form>
<p>Already have an account? <a href="signin.html">Sign In</a></p>
</div>
` }} />
  );
}
