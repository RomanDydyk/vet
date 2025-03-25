import { LogOut, NotificationIcon } from '../../assets/icons/header';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>ABC Vet - Console</h1>
      <div className={styles.actions}>
        <button className={styles.button}>
          <NotificationIcon />
        </button>
        <button className={styles.button}>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
