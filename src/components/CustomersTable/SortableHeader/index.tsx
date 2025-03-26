import Arrow from '../../../assets/icons/table/Arrow';
import styles from './SortableHeader.module.css';

export const SortableHeader = ({
  column,
  title,
}: {
  column: any;
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
