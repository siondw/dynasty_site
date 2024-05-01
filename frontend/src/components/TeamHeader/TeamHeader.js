import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TeamHeader.module.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

function TeamHeader({ teamId }) {
    const [team, setTeam] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/teams/${teamId}`)
            .then(response => {
                setTeam(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch team data:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [teamId]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching team data.</div>;
    if (!team) return <div>No team data available.</div>;

    return (
        <div className={styles.teamHeader}>
            <div className={styles.mainContainer}>
                <ProfilePicture teamId={team.team_id} altText={`${team.owner}'s Profile`} />
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
