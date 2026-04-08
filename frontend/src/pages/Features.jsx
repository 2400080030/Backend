import Navbar from '../components/Navbar';
import { ShieldCheck, BarChart3, Globe, Lock, Clock, Zap } from 'lucide-react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Bank-Grade Security',
      description: 'Your vote is secured with military-grade 256-bit encryption. Multi-factor authentication guarantees that only eligible voters can access the platform.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Accessible Anywhere',
      description: 'Cast your vote from the comfort of your home, at the office, or on the go. Our mobile-first platform ensures a seamless experience across all devices.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Real-Time Analytics',
      description: 'Election completely transparent? Authorized officials can monitor real-time voting trends, turnout percentages, and live standings instantly.'
    },
    {
      icon: <Lock size={32} />,
      title: 'Anonymity Guaranteed',
      description: 'Our cryptographic protocols ensure that while we verify who you are, your actual vote remains completely untraceable back to your identity.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Fraction of the Time',
      description: 'Say goodbye to waiting in long lines. End-to-end digital voting means an election takes days rather than months to organize and conclude.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Instant Results',
      description: 'The moment the polls close, the comprehensive results are calculated instantly with 100% accuracy. Zero manual recounting needed.'
    }
  ];

  return (
    <div className="features-page">
      <Navbar />
      
      <div className="features-hero">
        <div className="hero-badge">Why Choose Us</div>
        <h1>Next-Generation <span className="text-gradient">Voting Technology</span></h1>
        <p>
          We've engineered the most secure, transparent, and user-friendly online voting 
          platform ever created. Discover how we're upgrading democracy for the digital age.
        </p>
      </div>

      <div className="features-container">
        <div className="features-grid">
          {featureList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="features-closing">
        <div className="closing-content">
          <h2>Ready to experience the future of voting?</h2>
          <p>Join thousands of organizations who trust our platform for their crucial elections.</p>
          <a href="/signup" className="btn-primary closing-btn">Register to Vote Today</a>
        </div>
      </div>
    </div>
  );
};

export default Features;
