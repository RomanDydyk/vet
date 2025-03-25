import styles from './Selector.module.css';

const Selector = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <select
      className={styles.selector}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>All time</option>
      <option>This month</option>
      <option>This year</option>
    </select>
  );
};

export default Selector;
