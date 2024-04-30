// src/components/LandingPage.js
import React from 'react';
import styles from './HomeScreen.module.css';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';

function HomeScreen() {
    // Generate an array of team IDs from 1 to 10
    const teamIDs = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className={styles['home-screen']}>
            <header className={styles['home-header']}>
                <h1>Welcome to The Lifetime Dynasty League</h1>
                <p>Graciously sponsored by the Chehebar Family Foundation</p>
                <button className={styles['view-teams-button']}>View Teams</button>
            </header>
            <div className={styles['profile-section']}>
                {teamIDs.map(teamId => (
                    <ProfilePicture key={teamId} teamId={teamId} altText={`Player ${teamId}`} />
                ))}
            </div>
        </div>
    );
}


export default HomeScreen;
