import React from 'react';
import styles from './PositionIcon.module.css';

function PositionIcon({ position, playerName }) {
  const getPositionTextColor = () => {
    switch (position) {
      case 'QB':
        return styles.qbTextColor;
      case 'RB':
        return styles.rbTextColor;
      case 'WR':
        return styles.wrTextColor;
      case 'TE':
        return styles.teTextColor;
      default:
        return '';
    }
  };

  return (
    <div className={styles.playerInfo}>
      <div className={`${styles.positionIcon} ${getPositionTextColor()}`}>
        {position}
      </div>
      <span className={styles.playerName}>{playerName}</span>
    </div>
  );
}

export default PositionIcon;