import React from 'react';
import styles from './TeamHeader.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function TeamHeader({ team }) {
    return (
        <div className={styles.teamHeader}>
            <div className={styles.mainContainer}>
                <ProfilePicture teamId={team.id} altText={`${team.owner}'s Profile`} />
                <div className={styles.teamInfoContainer}>
                    <h1 className={styles.teamName}>{team.owner}</h1>
                    <div className={styles.teamInfoWrapper}>
                        <h2 className={styles.teamInfo}>Finished: {team.finishPosition}</h2>
                        <h2 className={styles.teamInfo}>Strengths: {team.strengths}</h2>
                        <h2 className={styles.teamInfo}>Needs: {team.needs}</h2>
                        <h2 className={styles.teamInfo}>FAAB: ${team.faab}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamHeader;
