import React from 'react';
import OWNER_NAMES from '../../config/OwnerMappings';
import OWNER_COLORS from '../../config/OwnerColors';
import styles from './DraftSlot.module.css';

function DraftSlot({ teamId }) {
    const teamName = OWNER_NAMES[teamId];
    const backgroundColor = `${OWNER_COLORS[teamId]}B3`; // Add 'B3' for 70% opacity

    return (
        <div className={styles.draftSlot} style={{ backgroundColor }}>
            <h6 className={styles.teamName}>{teamName}</h6>
        </div>
    );
}

export default DraftSlot;
