import { useState } from 'react';
import styles from './FilterDropdown.module.css';
import useClickOutside from '../../hooks/useCliccOutside';

interface FilterDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown = ({ options, value, onChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useClickOutside(() => setIsOpen(false));

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {value}
        <span className={styles.arrow}>▼</span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
