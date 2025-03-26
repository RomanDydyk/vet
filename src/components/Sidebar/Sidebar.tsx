import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { DashboardIcon } from '../../assets/icons/sidebar/DashboardIcon';
import { RewardsIcon } from '../../assets/icons/sidebar/RewardsIcon';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  const navigationItems = [
    {
      path: '/',
      icon: DashboardIcon,
      label: t('sidebar.dashboard'),
    },
    {
      path: '/rewards',
      icon: RewardsIcon,
      label: t('sidebar.rewards'),
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('sidebar.clinicConsole')}</h2>
      </div>
      <nav className={styles.navigation}>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              <Icon className={styles.icon} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
