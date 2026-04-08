import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const [votedFor, setVotedFor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/login');
      return;
    }

    fetchCandidates();
  }, [navigate]);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/candidates');
      setCandidates(response.data);
    } catch (error) {
      console.error('Failed to fetch candidates, using mock data instead', error);
      // Fallback if backend is not running
      setCandidates([
        { id: 1, name: "mohan", branch: "Bangalore HQ", voteCount: 15, voters: ["sarah_99", "dev_guy"] },
        { id: 2, name: "phani", branch: "MI", voteCount: 8, voters: ["jenny"] }
      ]);
    }
  };

  const castVote = async (candidateId) => {
    if (votedFor) return; // Prevent multiple votes
    
    // Always attach the username to know who voted
    const username = localStorage.getItem('username') || 'Anonymous';

    try {
      await axios.post('http://localhost:8080/api/vote', { candidateId, username });
      setVotedFor(candidateId);
      fetchCandidates();
    } catch (error) {
      console.error('Failed to cast vote, mocking success', error);
      // Fallback if backend is not running
      setVotedFor(candidateId);
      setCandidates(prev => prev.map(c => 
        c.id === candidateId ? { 
          ...c, 
          voteCount: c.voteCount + 1,
          voters: [...(c.voters || []), username]
        } : c
      ));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/login');
  };

  // Map specific IDs to reliable profile photos for consistency
  const getAvatarUrl = (candidate) => {
    const photoMap = {
      1: "/candidate_1.jpg", 
      2: "/candidate_2.jpg", 
      3: "/candidate_3.jpg", 
      4: "https://randomuser.me/api/portraits/women/68.jpg", 
    };
    return photoMap[candidate.id] || `https://i.pravatar.cc/150?u=${encodeURIComponent(candidate.name)}`;
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Voting Dashboard</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Welcome, {localStorage.getItem('voterId') || localStorage.getItem('username') || 'User'}
          </p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} /> Logout
        </button>
      </header>

      {votedFor && (
        <div style={{
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid var(--success)',
          color: 'var(--success)',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <CheckCircle size={20} />
          Your vote has been successfully cast! Thank you for participating.
        </div>
      )}

      <div className="candidates-grid">
        {candidates.map(candidate => (
          <div key={candidate.id} className="glass-panel candidate-card">
            <div className="avatar" style={{ padding: 0, overflow: 'hidden', border: '3px solid #ff5722' }}>
              <img 
                src={getAvatarUrl(candidate)} 
                alt={candidate.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h2 className="candidate-name">{candidate.name}</h2>
            <p style={{ margin: '0 0 1.5rem 0', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
              {candidate.branch || 'General'}
            </p>
            
            <button 
              className="vote-btn" 
              onClick={() => castVote(candidate.id)}
              disabled={votedFor !== null}
              style={{
                opacity: votedFor ? 0.5 : 1,
                cursor: votedFor ? 'not-allowed' : 'pointer'
              }}
            >
              {votedFor === candidate.id ? 'Voted' : 'Vote for ' + candidate.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
