import React from 'react';
import styles from './Pagination.module.css';
import { Table } from '@tanstack/react-table';

interface PaginationProps<T> {
  table: Table<T>;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
}
const Pagination = <T,>({
  table,
  rowsPerPage,
  setRowsPerPage,
}: PaginationProps<T>) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.rowsPerPage}>
        <span>Rows per page:</span>
        <div className={styles.selectContainer}>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className={styles.select}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
        </div>
        <span className={styles.displayingInfo}>
          Displaying {table.getState().pagination.pageIndex * rowsPerPage + 1}
          {table.getRowModel().rows.length > 0
            ? ` to ${Math.min(
                (table.getState().pagination.pageIndex + 1) * rowsPerPage,
                table.getPrePaginationRowModel().rows.length
              )} of ${table.getPrePaginationRowModel().rows.length}`
            : ''}{' '}
          results
        </span>
      </div>

      <div className={styles.paginationControls}>
        <button
          className={styles.paginationButton}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className={styles.paginationButton}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>

        {Array.from({ length: Math.min(5, table.getPageCount()) }).map(
          (_, index) => {
            const pageIndex = table.getState().pagination.pageIndex;
            let pageNumber;

            if (table.getPageCount() <= 5) {
              pageNumber = index + 1;
            } else if (pageIndex < 3) {
              pageNumber = index + 1;
            } else if (pageIndex > table.getPageCount() - 3) {
              pageNumber = table.getPageCount() - 4 + index;
            } else {
              pageNumber = pageIndex - 1 + index;
            }

            return (
              <React.Fragment key={pageNumber}>
                {pageNumber === pageIndex + 1 ? (
                  <button
                    className={`${styles.paginationButton} ${styles.activePage}`}
                  >
                    {pageNumber}
                  </button>
                ) : (
                  <button
                    className={styles.paginationButton}
                    onClick={() => table.setPageIndex(pageNumber - 1)}
                  >
                    {pageNumber}
                  </button>
                )}
                {pageNumber === 3 &&
                  pageIndex >= 3 &&
                  table.getPageCount() > 5 && (
                    <span className={styles.ellipsis}>...</span>
                  )}
              </React.Fragment>
            );
          }
        )}

        <button
          className={styles.paginationButton}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className={styles.paginationButton}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
