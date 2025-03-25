import styles from './StatCard.module.css';
import { FC } from 'react';

export type StatCardProps = {
  number: string;
  label: string;
  color: string;
  backgroundColor: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
};
const StatCard: FC<StatCardProps> = ({
  number,
  label,
  color,
  backgroundColor,
  Icon,
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
      <div className={styles.icon} style={{ backgroundColor: color }}>
        <Icon />
      </div>
      <div className={styles.content}>
        <h3 className={styles.number} style={{ color: color }}>
          {number}
        </h3>
        <p className={styles.label} style={{ color: color }}>
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
