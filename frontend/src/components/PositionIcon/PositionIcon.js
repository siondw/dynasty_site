import React from 'react';
import styles from './PositionIcon.module.css';

function PositionIcon({ position }) {
  const getPositionColor = () => {
    switch (position) {
      case 'QB':
        return styles.qbColor;
      case 'RB':
        return styles.rbColor;
      case 'WR':
        return styles.wrColor;
      case 'TE':
        return styles.teColor;
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.positionIcon} ${getPositionColor()}`}>
      {position}
    </div>
  );
}

export default PositionIcon;