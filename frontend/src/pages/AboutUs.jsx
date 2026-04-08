import React from 'react';
import Navbar from '../components/Navbar';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="page-wrapper about-page">
      <Navbar />
      
      <div className="about-hero">
        <div className="hero-badge">Our Story</div>
        <h1 className="about-title">Revolutionizing the <span className="text-gradient">Democratic Process</span></h1>
        <p className="about-hero-subtitle">
          We are building the infrastructure for the next generation of secure, accessible, and transparent elections everywhere.
        </p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text-column">
            <div className="highlight-quote-card">
              <p>
                "Welcome to VoteForChange — your trusted online voting platform. Experience secure, convenient, and transparent elections from the comfort of your home."
              </p>
            </div>
            
            <p className="about-paragraph">
              <strong>VoteForChange</strong> is a mobile-based voting platform that allows you to create and manage your election seamlessly. But it's much more than just a platform — it's a revolution in civic engagement. 
            </p>
            <p className="about-paragraph">
              Just as mobile banking redefined finance, and messaging apps transformed communication, VoteForChange is replacing outdated paper ballots with a lightning-fast, highly secure digital equivalent.
            </p>

            <div className="about-impact-box">
              <h3 className="impact-title">The Cost of Outdated Systems vs. Our Solution</h3>
              <p className="impact-text">
                If you have to choose between spending Rs. 30,000 Crores, 2 months, and 1 Crore man-days to manage an election with a 66% voter turnout <strong>VS</strong> spending less than 10% cost, 10% time, and 10% effort while still managing <strong>10 times better security</strong> and close to 100% voter turnout - what would you choose?
              </p>
            </div>
            
            <div className="core-values">
              <div className="value-item">
                <ShieldCheck size={24} className="value-icon" />
                <span>Maximum Security</span>
              </div>
              <div className="value-item">
                <Target size={24} className="value-icon" />
                <span>Unyielding Accuracy</span>
              </div>
              <div className="value-item">
                <TrendingUp size={24} className="value-icon" />
                <span>Record Turnout</span>
              </div>
            </div>

          </div>
          
          <div className="about-image-column">
            <div className="image-decoration-circle"></div>
            <img src="/about_illustration.png" alt="Voting process" className="about-illustration" />
            
            <div className="floating-stat-card">
              <h4 className="stat-number">100%</h4>
              <p className="stat-label">Verifiable Audit Trail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
