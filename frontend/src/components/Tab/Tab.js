import React from 'react';
import styles from './Tab.module.css';

function Tab({ text, selected, onClick }) {
  return (
    <div
      className={`${styles.tab} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Tab;