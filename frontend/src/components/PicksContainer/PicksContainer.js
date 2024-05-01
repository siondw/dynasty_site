import React from 'react';
import styles from './PicksContainer.module.css';
import OWNER_NAMES from '../../config/OwnerMappings';

function PicksContainer({ year, picks }) {
    const renderPickText = (pick) => {
        let pickText = `Round ${pick.round}`;
        pickText += pick.pickNumber ? ` Pick ${pick.pickNumber}` : '';

        if (pick.previousOwner) {
            const ownerName = OWNER_NAMES[pick.previousOwner] || "Unknown Owner";
            pickText += ` (from ${ownerName})`;
        }

        return pickText;
    };

    return (
        <div className={styles.container}>
            <h5 className={styles.yearTitle}>{year}</h5>
            <ul className={styles.pickList}>
                {picks.map((pick, index) => (
                    <li key={index}>{renderPickText(pick)}</li>
                ))}
            </ul>
        </div>
    );
}

export default PicksContainer;
