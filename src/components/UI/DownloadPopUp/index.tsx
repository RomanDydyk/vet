import { FC } from 'react';
import styles from './DownloadPopUp.module.css';

type DownloadPopUpProps = {
  handleFormatClick: (format: string) => void;
};

const DownloadPopUp: FC<DownloadPopUpProps> = ({ handleFormatClick }) => {
  return (
    <div className={styles.downloadPopup}>
      <button
        className={styles.downloadOption}
        onClick={() => handleFormatClick('PDF')}
      >
        Download PDF
      </button>
      <button
        className={styles.downloadOption}
        onClick={() => handleFormatClick('CSV')}
      >
        Download CSV
      </button>
      <button
        className={styles.downloadOption}
        onClick={() => handleFormatClick('XLSX')}
      >
        Download XLSX
      </button>
    </div>
  );
};

export default DownloadPopUp;
