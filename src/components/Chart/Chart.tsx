import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { useState, useRef, RefObject } from 'react';
import styles from './Chart.module.css';
import Download from '../../assets/icons/shared/Download';
import DownloadPopUp from '../UI/DownloadPopUp';
import useClickOutside from '../../hooks/useCliccOutside';
import { useFormatExport } from '../../hooks/useFormatExport';
import { renderCustomAxisTick } from './CustomAxisTick';
import SuccessModal from '../UI/SuccessModal';

type ChartProps = {
  data: { month: string; value: number }[];
};

const Chart = ({ data }: ChartProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useClickOutside(() => setShowPopup(false));
  const modalRef = useClickOutside(() => setShowSuccessModal(false));
  const chartRef = useRef<HTMLDivElement>(null);

  const chartData = data.map((item) => ({
    name: item.month,
    value: item.value,
  }));

  const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  const handleFormatClick = useFormatExport({
    chartRef: chartRef as RefObject<HTMLDivElement>,
    chartData,
    setShowPopup,
    openSuccessModal: () => setShowSuccessModal(true),
  });

  return (
    <div className={styles.chartContainer} ref={chartRef}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 50, right: 30, left: -30, bottom: 0 }}
          barCategoryGap={10}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={(props) => renderCustomAxisTick({ ...props, chartData })}
            height={60}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={6}
            ticks={[0, 10, 20, 30, 40, 50]}
            dx={12}
            dy={-10}
            fontSize={12}
            fontWeight="600"
            color="#454545"
            textAnchor="start"
          />
          <CartesianGrid
            horizontal={true}
            vertical={false}
            color="#E0E0E0"
            opacity={0.6}
          />
          <Bar
            dataKey="value"
            fill="#EDE8F0"
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>

      <div ref={popupRef}>
        <button
          className={styles.downloadIcon}
          onClick={handleDownloadClick}
          ref={buttonRef}
        >
          <Download />
        </button>

        {showPopup && <DownloadPopUp handleFormatClick={handleFormatClick} />}
      </div>

      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
          ref={modalRef as RefObject<HTMLDivElement>}
        />
      )}
    </div>
  );
};

export default Chart;
