import ArrowLeft from '../../../assets/icons/shared/ArrowLeft';
import styles from './BackButton.module.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <ArrowLeft />
      Back
    </button>
  );
};

export default BackButton;
