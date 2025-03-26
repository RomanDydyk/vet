import React from 'react';
import styles from './StatusCell.module.css';
import Star from '../../../assets/icons/table/Star';
import ErrorStar from '../../../assets/icons/table/ErrorStar';
import { Reward, RewardCheck } from '../../../assets/icons/dasboard';

interface StatusCellProps {
  status?: string;
}

const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case 'rewarded':
        return styles.issued;
      case 'current':
        return styles.green;
      case 'expiring':
        return styles.reconciled;
      case 'starsexpired':
        return styles.expired;
      case 'issued':
        return styles.green;

      case 'redeemed':
        return styles.redeemed;

      case 'reconciled':
        return styles.reconciled;

      case 'expired':
        return styles.expired;

      default:
        return '';
    }
  };

  return (
    <div className={styles.statusCell}>
      <div className={`${styles.statusIcon} ${getStatusClass()}`}>
        {status === 'rewarded' && <Star />}
        {status === 'current' && <Star />}
        {status === 'expiring' && <Star />}
        {status === 'starsexpired' && <ErrorStar />}
        {status === 'issued' && <Reward />}
        {status === 'redeemed' && <RewardCheck />}
        {status === 'reconciled' && <RewardCheck />}
        {status === 'expired' && <Reward />}
      </div>
    </div>
  );
};

export default StatusCell;
