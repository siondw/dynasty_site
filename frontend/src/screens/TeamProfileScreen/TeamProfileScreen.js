import React from 'react';
import { useParams } from 'react-router-dom';

import TeamHeader from '../../components/TeamHeader/TeamHeader';
import TabGroup from '../../components/TabGroup/TabGroup';
import styles from './TeamProfileScreen.module.css';

function TeamProfileScreen() {
  const { teamId } = useParams(); 

  return (
    <div className={styles['team-profile-screen']}>
      <TeamHeader teamId={teamId} />
      <TabGroup teamId={teamId} /> 
    </div>
  );
}

export default TeamProfileScreen;
