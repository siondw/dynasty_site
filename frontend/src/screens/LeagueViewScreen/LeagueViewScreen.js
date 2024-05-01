import React from 'react';
import DraftBoard from '../../components/DraftBoard/DraftBoard';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import styles from './LeagueViewScreen.module.css';
import { useNavigate } from 'react-router-dom';

function LeagueViewScreen() {
  const navigate = useNavigate();
  const year = 2024; 
  const teamIDs = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleProfileClick = (teamId) => {
    navigate(`/team/${teamId}`); // Navigates to the team profile screen
  };

  return (
    <div className={styles.leagueViewScreen}>
      <h1 className={styles.title}>2024 DRAFT ORDER</h1>
      <DraftBoard year={year} />
      <div className={styles.profileSection}>
        <h4 className={styles.profileTitle}>Click a Team to View</h4>
        <div className={styles.profileRow}>
          {teamIDs.slice(0, 5).map(teamId => (
            <ProfilePicture
              key={teamId}
              teamId={teamId}
              altText={`Player ${teamId}`}
              onClick={() => handleProfileClick(teamId)}
              size={145}
            />
          ))}
        </div>
        <div className={styles.profileRow}>
          {teamIDs.slice(5).map(teamId => (
            <ProfilePicture
              key={teamId}
              teamId={teamId}
              altText={`Player ${teamId}`}
              onClick={() => handleProfileClick(teamId)}
              size={145}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeagueViewScreen;