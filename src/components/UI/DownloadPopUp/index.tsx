import { FC } from 'react';
import styles from './DownloadPopUp.module.css';

type DownloadPopUpProps = {
  handleFormatClick: (format: string) => void;
  top?: number;
  right?: number;
};

const DownloadPopUp: FC<DownloadPopUpProps> = ({
  handleFormatClick,
  top = 60,
  right = 22,
}) => {
  return (
    <div
      className={styles.downloadPopup}
      style={{
        top: top,
        right: right,
      }}
    >
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
