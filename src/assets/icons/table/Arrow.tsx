import React from 'react';

interface ArrowProps {
  className?: string;
  isActive?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ className, isActive = false }) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 8 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 0L8 6H0L4 0Z"
        fill={isActive ? 'black' : 'white'}
        stroke="black"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Arrow;
