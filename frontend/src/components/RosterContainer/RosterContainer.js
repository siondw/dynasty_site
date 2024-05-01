import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RosterContainer.module.css';
import PositionIcon from '../PositionIcon/PositionIcon';

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

function RosterContainer({ teamId }) {
  const { data: roster, isLoading, error } = useCache(`http://localhost:5000/api/teams/${teamId}/players`, {});

  const renderPlayersByPosition = (position) => {
    return roster
      .filter(player => player.position === position)
      .map(player => (
        <div key={player.player_id} className={styles.playerItem}>
          <PositionIcon position={player.position} playerName={player.player_name} />
        </div>
      ));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching roster: {error.message}</div>;

  return (
    <div className={styles.rosterContainer}>
      <div className={styles.positionColumn}>
        {renderPlayersByPosition('QB')}
      </div>
      <div className={styles.positionColumn}>
        {renderPlayersByPosition('RB')}
      </div>
      <div className={styles.positionColumn}>
        {renderPlayersByPosition('WR')}
      </div>
      <div className={styles.positionColumn}>
        {renderPlayersByPosition('TE')}
      </div>
    </div>
  );
}

export default RosterContainer;