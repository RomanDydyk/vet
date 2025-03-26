import Arrow from '../../../assets/icons/table/Arrow';
import styles from './SortableHeader.module.css';
import { Column } from '@tanstack/react-table';

export const SortableHeader = <T,>({
  column,
  title,
}: {
  column: Column<T>;
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
