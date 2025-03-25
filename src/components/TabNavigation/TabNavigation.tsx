import styles from './TabNavigation.module.css';
import { FC } from 'react';

export type TabNavigationProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const TabNavigation: FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
