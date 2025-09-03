import React, { useState, useEffect } from 'react';
import type { InfoJson } from '../types/keyboard';
import Key from './Key';

interface KeyboardProps {
  infoJson: InfoJson;
}

const Keyboard: React.FC<KeyboardProps> = ({ infoJson }) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKeys((prev) => new Set(prev).add(event.key));
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const next = new Set(prev);
        next.delete(event.key);
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  // @ts-ignore
  const layout = infoJson.layouts.keymap;

  if (!layout) {
    return <div>No layout found</div>;
  }

  const keys: any[] = [];
  let x = 0;
  let y = -1;
  let keyProps = { w: 1, h: 1, r: 0, rx: 0, ry: 0 };

  layout.forEach((row: any) => {
    x = 0;
    y++;
    keyProps = { w: 1, h: 1, r: 0, rx: 0, ry: 0 };

    row.forEach((item: any) => {
      if (typeof item === 'object') {
        if (item.x) x += item.x;
        if (item.y) y += item.y;
        if (item.w) keyProps.w = item.w;
        if (item.h) keyProps.h = item.h;
        if (item.r) keyProps.r = item.r;
        if (item.rx) keyProps.rx = item.rx;
        if (item.ry) keyProps.ry = item.ry;
      } else if (typeof item === 'string') {
        const [matrixRow, matrixCol] = item.split(',').map(Number);

        keys.push({
          x,
          y,
          ...keyProps,
          label: `${matrixRow},${matrixCol}`,
        });

        x += keyProps.w;
        keyProps = { w: 1, h: 1, r: 0, rx: 0, ry: 0 };
      }
    });
  });

  return (
    <svg
      className="keyboard"
      width="100%"
      height="100%"
      viewBox="0 0 1000 400"
    >
      {keys.map((key, index) => (
        <Key key={index} {...key} isPressed={pressedKeys.has(key.label)} />
      ))}
    </svg>
  );
};

export default Keyboard;
