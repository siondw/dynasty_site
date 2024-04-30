import React from 'react';
import styles from './RosterContainer.module.css';
import PositionIcon from '../PositionIcon/PositionIcon';

function RosterContainer({ roster }) {
  const renderPlayersByPosition = (position) => {
    return roster
      .filter((player) => player.position === position)
      .map((player) => (
        <div key={player.id} className={styles.playerItem}>
          <PositionIcon position={player.position} playerName={player.name} />
        </div>
      ));
  };

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