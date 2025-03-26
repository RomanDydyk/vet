import styles from './NewButton.module.css';

interface NewButtonProps {
  onClick?: () => void;
}

const NewButton: React.FC<NewButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.newButtonContainer}>
      <div className={styles.newButton} onClick={onClick}>
        <span>NEW</span>
      </div>
      <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default NewButton;
