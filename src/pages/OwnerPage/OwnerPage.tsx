import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './OwnerPage.module.css';
import BackButton from '../../components/UI/BackButton';
import UserInfo from '../../components/UserInfo/UserInfo';
import Summary from '../../components/Summary/Summary';
import PetsSection from '../../components/PetsSection/PetsSection';
import dog1 from '../../assets/constants/dog1.png';
import dog2 from '../../assets/constants/dog2.png';
import ActivitySection from '../../components/ActivitySection/ActivitySection';

const OwnerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  const petsMockData = [
    {
      id: '1',
      name: 'Blue',
      avatar: dog1,
      weight: 'Medium dog (10-20 kg)',
      gender: 'Male',
      birthDate: '10/10/2022',
      age: '3 years old',
      totalStars: 8,
      totalRedeemed: 1,
      nextTreatment: {
        date: '2023-10-15',
        timeframe: '5 days',
      },
    },
    {
      id: '2',
      name: 'Buddy',
      avatar: dog2,
      weight: 'Medium dog (10-20 kg)',
      gender: 'Male',
      birthDate: '01/01/2024',
      age: '1 years old',
      totalStars: 1,
      totalRedeemed: 4,
      nextTreatment: {
        date: '2023-10-30',
        timeframe: '2 weeks',
      },
    },
  ];

  return (
    <div className={styles.ownerPage}>
      <BackButton />
      <h1 className={styles.ownerPageTitle}>Last Name</h1>
      <div className={styles.ownerPageContent}>
        <UserInfo
          email="test@test.com"
          phoneNumber="1234567890"
          memberSince="2021-01-01"
          lastStamp="2021-01-01"
          lastRewardEarned="2021-01-01"
          lastRewardRedeemed="2021-01-01"
        />
        <Summary
          currentStars={0}
          availableRewards={12}
          totalStars={1}
          totalRewards={100}
        />
      </div>
      <PetsSection pets={petsMockData} />
      <ActivitySection />
    </div>
  );
};

export default OwnerPage;
