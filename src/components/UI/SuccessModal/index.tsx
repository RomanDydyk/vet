import React from 'react';
import styles from './SuccessModal.module.css';
import CheckIcon from '../../../assets/icons/shared/CheckIcon';

interface SuccessModalProps {
  email?: string;
  onClose: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  email = '[clinic email address]',
  onClose,
  ref,
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={ref}>
        <div className={styles.iconContainer}>
          <CheckIcon />
        </div>

        <h2 className={styles.title}>It's on it's way!</h2>

        <p className={styles.message}>
          Your data has been emailed to {email}.
          <br />
          Please click the link on the email to download it.
        </p>

        <button className={styles.button} onClick={onClose}>
          Got It
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
