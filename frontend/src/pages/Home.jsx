import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldCheck, UserCheck, CheckSquare, FastForward, Lock, Globe } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/signup');
  };

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-subtitle">The Future of Democracy</h2>
          <h1 className="hero-title">Secure & Simple Online Voting</h1>
          <p className="hero-description">
            Empower your organization with a modern, reliable, and accessible voting platform. Cast your vote from anywhere, at any time, with absolute confidence in our bank-grade security.
          </p>
          <div className="hero-buttons">
            <button className="cta-btn primary-cta" onClick={handleCTA}>
              Register to Vote
            </button>
            <button className="cta-btn secondary-cta" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
              Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="how-section section-padding">
        <div className="section-header">
          <h2>Voting Made Easy</h2>
          <p>Participating in your organization's future takes less than 60 seconds.</p>
        </div>
        
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon-wrapper">
              <UserCheck size={36} className="step-icon" />
              <div className="step-number">1</div>
            </div>
            <h3>Register Securely</h3>
            <p>Create an account using your unique Voter ID. Your demographic data is instantly verified against our records.</p>
          </div>

          <div className="step-card">
            <div className="step-icon-wrapper">
              <Globe size={36} className="step-icon" />
              <div className="step-number">2</div>
            </div>
            <h3>Explore Candidates</h3>
            <p>Log into your personal dashboard to review active elections and read up on the candidates running.</p>
          </div>

          <div className="step-card">
            <div className="step-icon-wrapper">
              <CheckSquare size={36} className="step-icon" />
              <div className="step-number">3</div>
            </div>
            <h3>Cast Your Vote</h3>
            <p>Select your candidate and submit. Your voice is instantly recorded anonymously and cannot be altered.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Features */}
      <section className="trust-section section-padding">
        <div className="trust-content">
          <div className="trust-header">
            <h2>Built on Trust.</h2>
            <h2>Driven by Transparency.</h2>
            <p>We believe digital voting should be safer than paper ballots. Here is how we protect the integrity of every single election.</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <ShieldCheck size={32} className="feature-icon" />
              <div className="feature-text">
                <h4>Bank-Grade Encryption</h4>
                <p>All voting data is heavily encrypted both in transit and at rest.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <Lock size={32} className="feature-icon" />
              <div className="feature-text">
                <h4>Absolute Anonymity</h4>
                <p>Votes are automatically decoupled from your user profile upon submission to guarantee privacy.</p>
              </div>
            </div>

            <div className="feature-item">
              <FastForward size={32} className="feature-icon" />
              <div className="feature-text">
                <h4>Real-Time Processing</h4>
                <p>Watch participation rates soar with instant validation and dynamic dashboard updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta-section">
        <h2>Ready to make your voice heard?</h2>
        <p>Join thousands of other voters who have securely participated in our digital democracy.</p>
        <button className="cta-btn primary-cta" onClick={handleCTA}>
          Get Started Now
        </button>
      </section>

    </div>
  );
}

export default Home;
