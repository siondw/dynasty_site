import React, { useState } from 'react';
import styles from './TabGroup.module.css';
import Tab from '../Tab/Tab';
import RosterContainer from '../RosterContainer/RosterContainer';

function TabGroup({ rosterData }) {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'tab1':
        return <RosterContainer roster={rosterData} />;
      case 'tab2':
        return <div>Content for Tab 2</div>;
      case 'tab3':
        return <div>Content for Tab 3</div>;
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