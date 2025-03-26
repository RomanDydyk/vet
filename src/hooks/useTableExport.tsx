import { ColumnDef } from '@tanstack/react-table';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface UseTableExportProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  fileName?: string;
  tableRef?: React.RefObject<HTMLTableElement>;
}

export function useTableExport<T>({
  columns,
  data,
  fileName = 'data',
  tableRef,
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

  const downloadPDF = () => {
    if (!tableRef || !tableRef.current) {
      console.error('Ссылка на таблицу отсутствует или не содержит элемент');
      return;
    }

    const element = tableRef.current;

    const options = {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    };

    html2canvas(element, options)
      .then((canvas) => {
        const pdf = new jsPDF('l', 'pt', 'a4');

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgData = canvas.toDataURL('image/png');

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

        const scaledWidth = imgWidth * ratio;
        const scaledHeight = imgHeight * ratio;

        const x = (pageWidth - scaledWidth) / 2;
        const y = (pageHeight - scaledHeight) / 2;

        pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);

        pdf.save(`${fileName}.pdf`);
      })
      .catch((error) => {
        console.error('Ошибка при создании PDF:', error);
      });
  };

  return {
    downloadCSV,
    downloadXLSX,
    downloadPDF,
  };
}
