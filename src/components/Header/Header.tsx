import { useTranslation } from 'react-i18next';
import { LogOut, NotificationIcon } from '../../assets/icons/header';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <h1>{t('appTitle')}</h1>
      <div className={styles.actions}>
        <LanguageSwitcher />
        <button className={styles.button} title={t('actions.notifications')}>
          <NotificationIcon />
        </button>
        <button className={styles.button} title={t('actions.logout')}>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
