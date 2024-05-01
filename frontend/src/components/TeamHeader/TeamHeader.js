import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './TeamHeader.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

const cache = {};

function useCache(url, params) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = `${url}-${JSON.stringify(params)}`;

    if (cache[cacheKey]) {
      setData(cache[cacheKey]);
      setIsLoading(false);
    } else {
      axios.get(url, { params })
        .then(response => {
          cache[cacheKey] = response.data;
          setData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch data:', error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [url, JSON.stringify(params)]);

  return { data, isLoading, error };
}

function TeamHeader({ teamId }) {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const { data: team, isLoading, error } = useCache(`${apiUrl}/api/teams/${teamId}`, {});

  const handleViewLeagueClick = () => {
    navigate('/league-view');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching team data.</div>;
  if (!team) return <div>No team data available.</div>;

  return (
    <div className={styles.teamHeader}>
      <div className={styles.buttonContainer}>
        <button className={styles.viewLeagueButton} onClick={handleViewLeagueClick}>
          View League
        </button>
      </div>
      <div className={styles.mainContainer}>
        <ProfilePicture teamId={team.team_id} altText={`${team.owner}'s Profile`} size={200} />
        <div className={styles.teamInfoContainer}>
          <h1 className={styles.teamName}>{team.owner}</h1>
          <div className={styles.teamInfoWrapper}>
            <h2 className={styles.teamInfo}>Finished: {team.placement}</h2>
            <h2 className={styles.teamInfo}>Strengths: {team.team_strengths}</h2>
            <h2 className={styles.teamInfo}>Needs: {team.team_needs}</h2>
            <h2 className={styles.teamInfo}>FAAB: ${team.faab_budget}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;