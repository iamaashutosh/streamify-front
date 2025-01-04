import '../assets/homepage.css';

function Landingpage(){
    return(
  <>
  <div className="landing-page">
    <div className="landing-navbar">
      <div className="landing-logo">NepFlix</div>
      <div className="nav-buttons">
        <a href="/login">
          <button className="login-button">Login</button>
        </a>
        <a href="/register">
          <button className="signup-button">Register</button>
        </a>
      </div>
    </div>

    <div className="background-overlay">
      <div className="content">
        <h1 className="headline">Unlimited movies, TV shows, and more.</h1>
        <h2 className="subheadline">Watch anywhere. Cancel anytime.</h2>
        <p className="cta-text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email-cta">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <a href="/get-started">
            <button className="cta-button">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</>


      );
}

export default Landingpage;