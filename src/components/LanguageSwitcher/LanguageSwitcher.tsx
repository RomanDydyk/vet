import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.languageContainer}>
        <button
          className={`${styles.languageButton} ${
            i18n.language === 'en' ? styles.active : ''
          }`}
          onClick={() => changeLanguage('en')}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className={styles.divider}>|</span>
        <button
          className={`${styles.languageButton} ${
            i18n.language === 'es' ? styles.active : ''
          }`}
          onClick={() => changeLanguage('es')}
          aria-label="Switch to Spanish"
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
