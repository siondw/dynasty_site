import React from 'react';
import styles from './ProfilePicture.module.css';

function ProfilePicture({ teamId, altText }) {
    let imagePath;
    try {
        imagePath = require(`../../assets/${teamId}.jpeg`);
    } catch (e) {
        imagePath = require('../../assets/default_pic.png'); // Default image
    }

    return (
        <div className={styles.profilePicture}>
            <img src={imagePath} alt={altText || "Team Profile Picture"} />
        </div>
    );
}

export default ProfilePicture;
