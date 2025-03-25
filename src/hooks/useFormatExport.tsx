import { useCallback, RefObject } from 'react';
import jsPDF from 'jspdf';
import { utils, write } from 'xlsx';

interface ChartDataItem {
  name: string;
  value: number;
}

interface UseFormatExportProps {
  chartRef: RefObject<HTMLDivElement | null>;
  chartData: ChartDataItem[];
  setShowPopup: (show: boolean) => void;
  openSuccessModal: () => void;
}

export const useFormatExport = ({
  chartRef,
  chartData,
  setShowPopup,
  openSuccessModal,
}: UseFormatExportProps) => {
  return useCallback(
    async (format: string) => {
      setShowPopup(false);

      if (!chartRef.current) return;

      try {
        switch (format) {
          case 'PDF': {
            const svg = chartRef.current.querySelector('svg');
            if (svg) {
              const svgData = new XMLSerializer().serializeToString(svg);
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');

              const img = new Image();
              img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx?.drawImage(img, 0, 0);

                const pdf = new jsPDF('l', 'mm', 'a4');
                const imgData = canvas.toDataURL('image/png');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('chart.pdf');
                openSuccessModal();
              };

              img.src =
                'data:image/svg+xml;base64,' +
                btoa(unescape(encodeURIComponent(svgData)));
            }
            break;
          }

          case 'CSV': {
            let csvContent = 'Month,Value\n';
            chartData.forEach((item: ChartDataItem) => {
              csvContent += `${item.name},${item.value}\n`;
            });

            const csvBlob = new Blob([csvContent], {
              type: 'text/csv;charset=utf-8;',
            });
            const csvUrl = URL.createObjectURL(csvBlob);
            const link = document.createElement('a');
            link.href = csvUrl;
            link.setAttribute('download', 'chart_data.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            openSuccessModal();
            break;
          }

          case 'XLSX': {
            const ws = utils.json_to_sheet(
              chartData.map((item: ChartDataItem) => ({
                Month: item.name,
                Value: item.value,
              }))
            );

            const wb = utils.book_new();
            utils.book_append_sheet(wb, ws, 'Chart Data');

            const wbout = write(wb, { bookType: 'xlsx', type: 'binary' });

            const s2ab = (s: string) => {
              const buf = new ArrayBuffer(s.length);
              const view = new Uint8Array(buf);
              for (let i = 0; i < s.length; i++)
                view[i] = s.charCodeAt(i) & 0xff;
              return buf;
            };

            const blob = new Blob([s2ab(wbout)], {
              type: 'application/octet-stream',
            });
            const url = URL.createObjectURL(blob);

            const xlsxLink = document.createElement('a');
            xlsxLink.href = url;
            xlsxLink.setAttribute('download', 'chart_data.xlsx');
            document.body.appendChild(xlsxLink);
            xlsxLink.click();
            document.body.removeChild(xlsxLink);
            openSuccessModal();
            break;
          }

          default:
            console.error('Unsupported format:', format);
        }
      } catch (error) {
        console.error('Error exporting chart:', error);
      }
    },
    [chartData, chartRef, setShowPopup, openSuccessModal]
  );
};
