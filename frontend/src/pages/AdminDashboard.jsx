import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Users, Award, BarChart3, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [candidates, setCandidates] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAdminAuth') === 'true');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      fetchCandidates();
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('isAdminAuth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid admin credentials. Access denied.');
      setPassword('');
    }
  };

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/candidates');
      setCandidates(response.data);
    } catch (error) {
      console.error('Failed to fetch candidates, using mock data instead', error);
      setCandidates([
        { id: 1, name: "mohan", branch: "Bangalore HQ", voteCount: 15, voters: ["sarah", "dev"] },
        { id: 2, name: "phani", branch: "MI", voteCount: 8, voters: ["jenny"] }
      ]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuth');
    navigate('/');
  };

  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.voteCount, 0);

  // Sort candidates by vote count descending
  const sortedCandidates = [...candidates].sort((a, b) => b.voteCount - a.voteCount);

  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <Navbar />
        <div className="admin-login-content">
          <div className="admin-login-card">
            <Lock size={48} />
            <h2>Admin Portal</h2>
            <p>Access restricted to authorized personnel</p>
            
            {error && <div className="admin-error">{error}</div>}
            
            <form onSubmit={handleLogin} className="admin-login-form">
              <input 
                type="password" 
                className="admin-input" 
                placeholder="Enter Admin Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="admin-login-btn">Secure Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="header-title">
          <Award size={32} color="var(--primary)" />
          <h1>Admin Dashboard: Live Results</h1>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} /> Exit Admin
        </button>
      </header>

      <div className="stats-cards">
        <div className="stat-card">
          <Users size={24} />
          <div className="stat-info">
            <h3>Total Candidates</h3>
            <p>{candidates.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <BarChart3 size={24} />
          <div className="stat-info">
            <h3>Total Votes Cast</h3>
            <p>{totalVotes}</p>
          </div>
        </div>
      </div>

      <div className="results-container">
        <h2>Election Standings</h2>
        <div className="results-table">
          <div className="table-header">
            <span>Rank</span>
            <span>Candidate Name</span>
            <span>Branch</span>
            <span>Votes</span>
            <span>Percentage</span>
          </div>
          {sortedCandidates.map((candidate, index) => {
            const percentage = totalVotes > 0 ? Math.round((candidate.voteCount / totalVotes) * 100) : 0;
            return (
              <div key={candidate.id} className="table-row">
                <span className="rank">#{index + 1}</span>
                <span className="name">{candidate.name}</span>
                <span className="branch" style={{ color: '#64748b', fontWeight: '500', fontSize: '0.9rem' }}>{candidate.branch || 'General'}</span>
                <span className="votes">{candidate.voteCount}</span>
                <span className="percentage">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
                  </div>
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
