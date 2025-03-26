import { useState } from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import styles from './ActivitySection.module.css';
import { activityData } from './constants';
import StatCard from '../StatCard/StatCard';
import CustomersTable from '../CustomersTable/CustomersTable';
import useColumnTable from '../../hooks/useColumnTable';
import { mockStarsData, mockRewardsData } from './mockData';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

const ActivitySection = () => {
  const [activeTab, setActiveTab] = useState('Stars');
  const [selectedPet, setSelectedPet] = useState('All pets');
  const [showExpiredOnly, setShowExpiredOnly] = useState(false);

  const { starsColumns, rewardsColumns } = useColumnTable(activeTab);

  const tableData = activeTab === 'Stars' ? mockStarsData : mockRewardsData;

  const filteredData = tableData.filter((item) => {
    if (showExpiredOnly) {
      if (activeTab === 'Stars' && item.status !== 'starsexpired') return false;
      if (activeTab === 'Rewards' && item.status !== 'expired') return false;
    }

    if (selectedPet !== 'All pets' && item.petName !== selectedPet)
      return false;
    return true;
  });

  const petOptions = [
    'All pets',
    ...new Set(tableData.map((item) => item.petName)),
  ];

  return (
    <div className={styles.activitySection}>
      <h2 className={styles.activityTitle}>Activity</h2>

      <div className={styles.activityCards}>
        {activityData.map((item) => (
          <StatCard
            key={item.label}
            number={item.number}
            label={item.label || ''}
            color={item.color}
            backgroundColor={item.backgroundColor}
            Icon={item.icon}
          />
        ))}
      </div>
      <div className={styles.activityHeader}>
        <TabNavigation
          tabs={['Stars', 'Rewards']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className={styles.filterContainer}>
          <FilterDropdown
            options={petOptions}
            value={selectedPet}
            onChange={setSelectedPet}
          />
          <div className={styles.checkboxFilter}>
            <input
              type="checkbox"
              id="expiredOnly"
              checked={showExpiredOnly}
              onChange={() => setShowExpiredOnly(!showExpiredOnly)}
            />
            <label htmlFor="expiredOnly">
              {activeTab === 'Stars'
                ? 'Show stars expired only'
                : 'Show rewards expired only'}
            </label>
          </div>
        </div>
      </div>

      <CustomersTable
        data={filteredData}
        columns={activeTab === 'Stars' ? starsColumns : rewardsColumns}
        handleRowClick={() => {}}
      />
    </div>
  );
};

export default ActivitySection;
