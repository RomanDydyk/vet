import { useState, useEffect, RefObject, useRef } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
  ColumnDef,
} from '@tanstack/react-table';
import styles from './CustomersTable.module.css';
import Pagination from './Pagination';
import Download from '../../assets/icons/shared/Download';
import useClickOutside from '../../hooks/useCliccOutside';
import SuccessModal from '../UI/SuccessModal';
import DownloadPopUp from '../UI/DownloadPopUp';
import { useTableExport } from '../../hooks/useTableExport';

interface CustomersTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  handleRowClick: (id: string) => void;
}

export default function CustomersTable<T extends object>({
  data,
  columns,
  handleRowClick,
}: CustomersTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const popupRef = useClickOutside(() => setShowPopup(false));
  const modalRef = useClickOutside(() => setShowSuccessModal(false));

  const tableRef = useRef<HTMLTableElement>(null);

  const { downloadCSV, downloadXLSX, downloadPDF } = useTableExport({
    columns: columns as ColumnDef<T>[],
    data,
    fileName: 'customers-data',
    tableRef: tableRef as RefObject<HTMLTableElement>,
  });

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

  useEffect(() => {
    table.setPageSize(rowsPerPage);
  }, [rowsPerPage, table]);

  const handleDownloadClick = () => {
    setShowPopup(!showPopup);
  };

  const handleFormatClick = (format: string) => {
    if (format === 'CSV') {
      downloadCSV();
    } else if (format === 'XLSX') {
      downloadXLSX();
    } else if (format === 'PDF') {
      downloadPDF();
    }

    setShowPopup(false);
    setShowSuccessModal(true);
  };

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableContainer}>
        <table ref={tableRef} className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={
                      header.column.getCanSort()
                        ? styles.sortableHeader
                        : styles.header
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
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={styles.row}
                  onClick={() => handleRowClick(row.id)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={styles.cell}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className={styles.emptyCell}>
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        table={table}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
      <div ref={popupRef} className={styles.downloadContainer}>
        <button className={styles.downloadIcon} onClick={handleDownloadClick}>
          <Download />
        </button>

        {showPopup && (
          <DownloadPopUp
            handleFormatClick={handleFormatClick}
            top={40}
            right={-2}
          />
        )}
        {showSuccessModal && (
          <SuccessModal
            onClose={() => setShowSuccessModal(false)}
            ref={modalRef as RefObject<HTMLDivElement>}
          />
        )}
      </div>
    </div>
  );
}
