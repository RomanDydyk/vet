import styles from './StatusLegend.module.css';
import StatusCell from '../StatusCell';

type StatusLegendProps = {
  activeTab: string;
};

const StatusLegend = ({ activeTab }: StatusLegendProps) => {
  return (
    <div className={styles.statusLegend}>
      {activeTab === 'Stars' && (
        <>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="rewarded" />
            </div>
            <span>Rewarded stars</span>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="current" />
            </div>
            <span>Current stars</span>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="expiring" />
            </div>
            <span>Stars expiring soon (within 30 days)</span>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="starsexpired" />
            </div>
            <span>Stars expired</span>
          </div>
        </>
      )}
      {activeTab === 'Rewards' && (
        <>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="issued" />
            </div>
            <span>Issued</span>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="redeemed" />
            </div>
            <span>Redeemed</span>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="reconciled" />
            </div>
            <span>Reconciled</span>
          </div>
          <div className={styles.statusItem}>
            <div className={styles.iconWrapper}>
              <StatusCell status="expired" />
            </div>
            <span>Expired</span>
          </div>
        </>
      )}
    </div>
  );
};

export default StatusLegend;
