import React from 'react';
import styles from './ProfilePicture.module.css';

function ProfilePicture({ teamId, altText, onClick }) {
    let imagePath;
    try {
        imagePath = require(`../../assets/${teamId}.jpeg`);
    } catch (e) {
        imagePath = require('../../assets/default_pic.png'); // Fallback image
    }

    return (
        <div className={`${styles.profilePicture}`} onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={imagePath} alt={altText || "Team Profile Picture"} />
        </div>
    );
}

export default ProfilePicture;
