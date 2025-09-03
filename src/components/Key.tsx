import React from 'react';
import { getHumanKeycode } from '../lib/keycodes';

interface KeyProps {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  rx: number;
  ry: number;
  keycode: string | number;
  isPressed: boolean;
}

const Key: React.FC<KeyProps> = ({ x, y, w, h, r, rx, ry, keycode, isPressed }) => {
  const transform = `translate(${x * 60}, ${y * 60}) rotate(${r}, ${
    rx * 60
  }, ${ry * 60})`;

  return (
    <g transform={transform}>
      <rect
        width={w * 60 - 4}
        height={h * 60 - 4}
        rx="5"
        ry="5"
        fill={isPressed ? 'orange' : '#ccc'}
      />
      <text
        x={(w * 60) / 2}
        y={(h * 60) / 2}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {getHumanKeycode(keycode)}
      </text>
    </g>
  );
};

export default Key;
