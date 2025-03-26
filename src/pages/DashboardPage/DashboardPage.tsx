import { useMemo, useState } from 'react';
import styles from './DashboardPage.module.css';
import StatCard from '../../components/StatCard/StatCard';
import TabNavigation from '../../components/TabNavigation/TabNavigation';
import Selector from '../../components/UI/Selector';
import Chart from '../../components/Chart/Chart';
import CustomersTable from '../../components/CustomersTable/CustomersTable';
import { statsData, tabsArray, chartData } from './consts';
import useColumnTable from '../../hooks/useColumnTable';
import { ICustomer, IPet } from './types';
import StatusLegend from '../../components/CustomersTable/StatusLegend';
import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [timeFilter, setTimeFilter] = useState('All time');
  const [activeTab, setActiveTab] = useState(tabsArray[0]);
  const { dashboardColumns, petColumns } = useColumnTable(activeTab);

  const currentChartData = chartData[activeTab as keyof typeof chartData];

  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/owner/${id}`);
  };

  const mockData: ICustomer[] = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: `id-${i + 1}`,
      firstName: i === 0 ? 'Luis' : `Name`,
      lastName: i === 0 ? 'Smith' : 'Last Name',
      email: 'email@gmail.com',
      phone: '123456789',
      pets: String(Math.floor(Math.random() * 3) + 1),
      joinDate: '01/09/24',
      lastActivityDate: '01/09/24',
      activeRewards: 0,
      activeStars: Math.floor(Math.random() * 3),
      isNew: Math.random() > 0.5,
    }));
  }, []);

  const mockPetData: IPet[] = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: `id-${i + 1}`,
      startsStatus:
        Math.random() > 0.5
          ? 'rewarded'
          : Math.random() > 0.5
          ? 'current'
          : Math.random() > 0.5
          ? 'starsexpired'
          : 'expiring',
      rewordsStatus:
        Math.random() > 0.5
          ? 'issued'
          : Math.random() > 0.5
          ? 'redeemed'
          : Math.random() > 0.5
          ? 'reconciled'
          : 'expired',
      ownerFirstName: 'Luis',
      ownerLastName: 'Smith',
      petName: 'Pet Name',
      issueDate: '01/09/24',
      expiryDate: '01/09/24',
      size: 'Small',
    }));
  }, []);

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

      {(activeTab === 'Stars' || activeTab === 'Rewards') && (
        <StatusLegend activeTab={activeTab} />
      )}

      {activeTab === 'Stars' ? (
        <CustomersTable
          data={mockPetData}
          columns={petColumns as ColumnDef<IPet>[]}
          handleRowClick={handleRowClick}
        />
      ) : activeTab === 'Rewards' ? (
        <CustomersTable
          data={mockPetData}
          columns={petColumns as ColumnDef<IPet>[]}
          handleRowClick={handleRowClick}
        />
      ) : (
        <CustomersTable
          data={mockData}
          columns={dashboardColumns as ColumnDef<ICustomer>[]}
          handleRowClick={handleRowClick}
        />
      )}
    </div>
  );
};

export default DashboardPage;
