import React from 'react';
import styles from './CheckIcon.module.css';

const CheckIcon: React.FC = () => {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 52 52">
      <circle className={styles.circle} cx="26" cy="26" r="25" fill="none" />
      <path
        className={styles.check}
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};

export default CheckIcon;
