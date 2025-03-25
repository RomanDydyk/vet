import { useState } from 'react';
import styles from './DashboardPage.module.css';
import StatCard from '../../components/StatCard/StatCard';
import TabNavigation from '../../components/TabNavigation/TabNavigation';
import Selector from '../../components/UI/Selector';
import Chart from '../../components/Chart/Chart';
import CustomersTable from '../../components/CustomersTable/CustomersTable';
import { statsData, tabsArray, chartData } from './consts';
import { customersData } from './mockData';

const DashboardPage = () => {
  const [timeFilter, setTimeFilter] = useState('All time');
  const [activeTab, setActiveTab] = useState(tabsArray[0]);

  const currentChartData = chartData[activeTab as keyof typeof chartData];

  return (
    <div className={styles.dashboard}>
      <div className={styles.filter}>
        <Selector value={timeFilter} onChange={setTimeFilter} />
      </div>

      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            label={stat.label}
            backgroundColor={stat.backgroundColor}
            color={stat.color}
            Icon={stat.icon}
          />
        ))}
      </div>

      <TabNavigation
        tabs={tabsArray}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Chart data={currentChartData} />

      <CustomersTable data={customersData} />
    </div>
  );
};

export default DashboardPage;
