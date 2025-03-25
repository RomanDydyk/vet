type CustomAxisTickProps = {
  x: number;
  y: number;
  payload: { value: string };
  chartData: { name: string; value: number }[];
};

export const renderCustomAxisTick = (props: CustomAxisTickProps) => {
  const { x, y, payload, chartData } = props;
  const item = chartData.find((d) => d.name === payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="var(--primary-color)"
        fontSize={16}
        fontWeight="700"
      >
        {item?.value}
      </text>
      <text
        x={0}
        y={0}
        dy={35}
        textAnchor="middle"
        fill="#000"
        fontSize={12}
        fontWeight="600"
      >
        {payload.value}
      </text>
    </g>
  );
};
