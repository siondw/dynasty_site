import React, { useState } from 'react';
import styles from './TabGroup.module.css';
import Tab from '../Tab/Tab';
import RosterContainer from '../RosterContainer/RosterContainer';
import PicksLayout from '../PicksLayout/PicksLayout';

function TabGroup({ teamId }) {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'tab1':
        return <RosterContainer teamId={teamId} />;
      case 'tab2':
        return <div> <PicksLayout teamId={teamId} /></div>;
      case 'tab3':
        return <div>Coming Soon</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabGroup}>
      <div className={styles.tabContainer}>
        <Tab text="Roster" selected={selectedTab === 'tab1'} onClick={() => handleTabClick('tab1')} />
        <Tab text="Picks" selected={selectedTab === 'tab2'} onClick={() => handleTabClick('tab2')} />
        <Tab text="Trade Block" selected={selectedTab === 'tab3'} onClick={() => handleTabClick('tab3')} />
      </div>
      <div className={styles.tabContent}>{renderTabContent()}</div>
    </div>
  );
}

export default TabGroup;