import React, { useState, useEffect } from 'react';
import Key from './Key';

interface KeyData {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  rx: number;
  ry: number;
  keycodes: (string | number)[];
}

interface KeyboardProps {
  keyboard: KeyData[];
}

const Keyboard: React.FC<KeyboardProps> = ({ keyboard }) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [activeLayer, setActiveLayer] = useState(0);

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

  return (
    <div>
      <div className="layer-switcher">
        <button onClick={() => setActiveLayer(0)}>Layer 0</button>
        <button onClick={() => setActiveLayer(1)}>Layer 1</button>
        <button onClick={() => setActiveLayer(2)}>Layer 2</button>
        <button onClick={() => setActiveLayer(3)}>Layer 3</button>
      </div>
      <svg
        className="keyboard"
        width="100%"
        height="100%"
        viewBox="0 0 1200 500"
      >
        {keyboard.map((key, index) => (
          <Key
            key={index}
            {...key}
            keycode={key.keycodes[activeLayer]}
            isPressed={pressedKeys.has(String(key.keycodes[activeLayer]))}
          />
        ))}
      </svg>
    </div>
  );
};

export default Keyboard;
