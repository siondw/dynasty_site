import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeScreen.module.css';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';

function HomeScreen() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();  // Hook for navigation
  const teamIDs = Array.from({ length: 10 }, (_, i) => i + 1);

  const toggleEffects = () => {
    setIsActive(!isActive);
  };

  const handleProfileClick = (teamId) => {
    navigate(`/team/${teamId}`);  // Navigates to the team profile screen
  };

  return (
    <div className={styles['home-screen']}>
      <div className={styles['content-wrapper']}>
        <header className={`${styles['home-header']} ${isActive ? styles.dim : ''}`}>
          <h2>Welcome to</h2>
          <h1>
            The <span className={styles.lifetime}>Lifetime</span> Dynasty League
          </h1>
          <p>Graciously sponsored by the Chehebar Family Foundation</p>
          <button onClick={toggleEffects} className={styles['view-teams-button']}>
            View Teams
          </button>
        </header>
        <div className={`${styles['profile-section']} ${isActive ? styles.glow : ''}`}>
          {teamIDs.map(teamId => (
            <ProfilePicture key={teamId} teamId={teamId} altText={`Player ${teamId}`} onClick={() => handleProfileClick(teamId)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
