import React from 'react';

interface KeyProps {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  rx: number;
  ry: number;
  label: string;
  isPressed: boolean;
}

const Key: React.FC<KeyProps> = ({ x, y, w, h, r, rx, ry, label, isPressed }) => {
  const transform = `translate(${x * 50}, ${y * 50}) rotate(${r}, ${
    rx * 50
  }, ${ry * 50})`;

  return (
    <g transform={transform}>
      <rect
        width={w * 50 - 2}
        height={h * 50 - 2}
        rx="5"
        ry="5"
        fill={isPressed ? 'orange' : '#ccc'}
      />
      <text
        x={(w * 50) / 2}
        y={(h * 50) / 2}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {label}
      </text>
    </g>
  );
};

export default Key;
