import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { DashboardIcon } from '../../assets/icons/sidebar/DashboardIcon';
import { RewardsIcon } from '../../assets/icons/sidebar/RewardsIcon';

const navigationItems = [
  {
    path: '/',
    icon: DashboardIcon,
    label: 'Dashboard',
  },
  {
    path: '/rewards',
    icon: RewardsIcon,
    label: 'Rewards',
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>CLINIC CONSOLE</h2>
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
