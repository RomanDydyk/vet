import { useReactTable } from '@tanstack/react-table';
import Arrow from '../../../assets/icons/table/Arrow';
import styles from './SortableHeader.module.css';

export const SortableHeader = ({
  column,
  title,
}: {
  column: ReturnType<
    typeof useReactTable
  >['getHeaderGroups'][0]['headers'][0]['column'];
  title: string;
}) => {
  return (
    <div onClick={column.getToggleSortingHandler()} className={styles.sortable}>
      {title}
      <div className={styles.sortIconContainer}>
        <Arrow
          className={styles.sortIconUp}
          isActive={column.getIsSorted() === 'asc'}
        />
        <Arrow
          className={styles.sortIconDown}
          isActive={column.getIsSorted() === 'desc'}
        />
      </div>
    </div>
  );
};
