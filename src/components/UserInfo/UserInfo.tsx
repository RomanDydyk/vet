import React from 'react';
import styles from './UserInfo.module.css';

interface UserInfoProps {
  email: string;
  phoneNumber: string;
  memberSince: string;
  lastStamp: string;
  lastRewardEarned: string;
  lastRewardRedeemed: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  email,
  phoneNumber,
  memberSince,
  lastStamp,
  lastRewardEarned,
  lastRewardRedeemed,
}) => {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.infoRow}>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoLabel}>Email</h3>
          <p className={styles.infoValue}>{email}</p>
        </div>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoLabel}>Last stamp</h3>
          <p className={styles.infoValue}>{lastStamp}</p>
        </div>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoLabel}>Phone number</h3>
          <p className={styles.infoValue}>{phoneNumber}</p>
        </div>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoLabel}>Last reward earned</h3>
          <p className={styles.infoValue}>{lastRewardEarned}</p>
        </div>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoLabel}>Member since</h3>
          <p className={styles.infoValue}>{memberSince}</p>
        </div>
        <div className={styles.infoColumn}>
          <h3 className={styles.infoLabel}>Last reward redeemed</h3>
          <p className={styles.infoValue}>{lastRewardRedeemed}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
