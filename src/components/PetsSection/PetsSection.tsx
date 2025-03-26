import React from 'react';
import styles from './PetsSection.module.css';
import Bell from '../../assets/icons/shared/Bell';
import { Reward, Star } from '../../assets/icons/dasboard';

interface Pet {
  id: string;
  name: string;
  avatar: string;
  weight: string;
  gender: string;
  birthDate: string;
  age: string;
  totalStars: number;
  totalRedeemed: number;
  nextTreatment: {
    date: string;
    timeframe: string;
  };
}

interface PetsSectionProps {
  pets: Pet[];
  title?: string;
}

const PetsSection: React.FC<PetsSectionProps> = ({ pets, title = 'Pets' }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title} ({pets.length})
      </h2>
      <div className={styles.petsGrid}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.petCard}>
            <div className={styles.petHeader}>
              <div className={styles.avatarContainer}>
                <img
                  src={pet.avatar}
                  alt={pet.name}
                  className={styles.avatar}
                />
              </div>
              <h3 className={styles.petName}>{pet.name}</h3>
            </div>

            <div className={styles.petInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Weight/size</span>
                <span className={styles.infoValue}>{pet.weight}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Gender</span>
                <span className={styles.infoValue}>{pet.gender}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Date of birth</span>
                <span className={styles.infoValue}>
                  {pet.birthDate} - {pet.age}
                </span>
              </div>
            </div>

            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Star />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{pet.totalStars}</div>
                  <div className={styles.statLabel}>Total stars</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Reward />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValueRed}>{pet.totalRedeemed}</div>
                  <div className={styles.statLabelRed}>Total redeemed</div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.treatmentInfo} ${
                pet.nextTreatment.timeframe.includes('days')
                  ? styles.urgent
                  : styles.normal
              }`}
            >
              <span className={styles.treatmentIcon}>
                <Bell />
              </span>
              <span className={styles.treatmentText}>
                Next treatment in{' '}
                <span className={styles.treatmentTimeframe}>
                  {pet.nextTreatment.timeframe}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsSection;
