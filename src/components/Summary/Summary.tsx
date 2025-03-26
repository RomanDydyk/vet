import React from 'react';
import styles from './Summary.module.css';
import { Reward, Star } from '../../assets/icons/dasboard';
import paw from '../../assets/icons/Paw.png';

interface SummaryProps {
  currentStars: number;
  availableRewards: number;
  totalStars: number;
  totalRewards: number;
}

const Summary: React.FC<SummaryProps> = ({
  currentStars,
  availableRewards,
  totalStars,
  totalRewards,
}) => {
  return (
    <div className={styles.summaryContainer}>
      <img src={paw} alt="paw" />
      <div className={styles.cardSummary}>
        <h3 className={styles.summaryTitle}>Current card summary</h3>
        <div className={styles.summaryContent}>
          <div className={styles.summaryItem}>
            <div className={styles.starIcon}>
              <Star />
            </div>
            <div className={styles.summaryData}>
              <span className={styles.summaryValue}>{currentStars}</span>
              <span className={styles.summaryLabel}>Current stars</span>
            </div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.giftIcon}>
              <Reward />
            </div>
            <div className={styles.summaryData}>
              <span className={styles.summaryValueRed}>{availableRewards}</span>
              <span className={styles.summaryLabelRed}>Available rewards</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.totalSummary}>
        <h3 className={styles.summaryTitle}>Total summary</h3>
        <div className={styles.summaryContent}>
          <div className={styles.summaryItem}>
            <div className={styles.starIcon}>
              <Star />
            </div>
            <div className={styles.summaryData}>
              <span className={styles.summaryValue}>{totalStars}</span>
              <span className={styles.summaryLabel}>Total stars</span>
            </div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.giftIcon}>
              <Reward />
            </div>
            <div className={styles.summaryData}>
              <span className={styles.summaryValueRed}>{totalRewards}</span>
              <span className={styles.summaryLabelRed}>Total rewards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
