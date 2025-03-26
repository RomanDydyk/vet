import { ColumnDef } from '@tanstack/react-table';

interface UseTableExportProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  fileName?: string;
}

export function useTableExport<T>({
  columns,
  data,
  fileName = 'data',
}: UseTableExportProps<T>) {
  const downloadCSV = () => {
    const headers = columns.map((col) => String(col.header)).join(',');
    const rows = data
      .map((row) =>
        columns
          .map((col) => {
            if ('accessorKey' in col) {
              const key = col.accessorKey as string;
              return key ? row[key as keyof T] : '';
            } else if ('accessorFn' in col && col.accessorFn) {
              return col.accessorFn(row, 0) || '';
            }
            return '';
          })
          .join(',')
      )
      .join('\n');

    const csvContent = `${headers}\n${rows}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${fileName}.csv`);
    link.click();
  };

  const downloadXLSX = () => {
    const headers = columns.map((col) => String(col.header)).join('\t');
    const rows = data
      .map((row) =>
        columns
          .map((col) => {
            if ('accessorKey' in col) {
              const key = col.accessorKey as string;
              return key ? row[key as keyof T] : '';
            } else if ('accessorFn' in col && col.accessorFn) {
              return col.accessorFn(row, 0) || '';
            }
            return '';
          })
          .join('\t')
      )
      .join('\n');

    const xlsxContent = `${headers}\n${rows}`;
    const blob = new Blob([xlsxContent], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${fileName}.xlsx`);
    link.click();
  };

  const downloadPDF = () => {};

  return {
    downloadCSV,
    downloadXLSX,
    downloadPDF,
  };
}
