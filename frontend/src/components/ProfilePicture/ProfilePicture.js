import React from 'react';
import styles from './ProfilePicture.module.css';

function ProfilePicture({ teamId, altText, onClick, size }) {
  let imagePath;
  try {
    imagePath = require(`../../assets/${teamId}.jpeg`);
  } catch (e) {
    imagePath = require('../../assets/default_pic.png'); // Fallback image
  }

  return (
    <div
      className={`${styles.profilePicture}`}
      onClick={onClick}
      style={{ cursor: 'pointer', width: `${size}px`, height: `${size}px` }}
    >
      <img src={imagePath} alt={altText || "Team Profile Picture"} />
    </div>
  );
}

export default ProfilePicture;