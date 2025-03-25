import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
  SortingState,
} from '@tanstack/react-table';
import { ICustomer } from '../../pages/DashboardPage/types';
import styles from './CustomersTable.module.css';

interface CustomersTableProps {
  data: ICustomer[];
}

const CustomersTable = ({ data }: CustomersTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columnHelper = createColumnHelper<ICustomer>();

  const columns = [
    columnHelper.accessor('firstName', {
      header: () => (
        <span>
          First Name <span className={styles.sortIcon}>↕</span>
        </span>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: () => (
        <span>
          Last Name <span className={styles.sortIcon}>↕</span>
        </span>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('phone', {
      header: 'Phone',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('pets', {
      header: 'Pets',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('joinDate', {
      header: () => (
        <span>
          Join Date <span className={styles.sortIcon}>↕</span>
        </span>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastActivityDate', {
      header: () => (
        <span>
          Last Activity Date <span className={styles.sortIcon}>↕</span>
        </span>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('activeRewards', {
      header: () => (
        <span>
          Active Rewards <span className={styles.sortIcon}>↕</span>
        </span>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('activeStars', {
      header: () => (
        <span>
          Active Stars <span className={styles.sortIcon}>↕</span>
        </span>
      ),
      cell: (info) => (
        <span className={styles.stars}>{'★'.repeat(info.getValue())}</span>
      ),
    }),
    columnHelper.accessor('isNew', {
      header: '',
      cell: (info) =>
        info.getValue() ? <div className={styles.newBadge}>NEW</div> : null,
    }),
    columnHelper.accessor('id', {
      header: '',
      cell: () => <button className={styles.detailsButton}>→</button>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Set page size
  React.useEffect(() => {
    table.setPageSize(rowsPerPage);
  }, [rowsPerPage, table]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={
                      header.column.getCanSort() ? styles.sortable : ''
                    }
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <div className={styles.rowsPerPage}>
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
          <span className={styles.displayingInfo}>
            Displaying {table.getState().pagination.pageIndex * rowsPerPage + 1}{' '}
            to{' '}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * rowsPerPage,
              data.length
            )}{' '}
            of {data.length} results
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
    </div>
  );
};

export default CustomersTable;
