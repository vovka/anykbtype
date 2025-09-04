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
  nextKey: KeyData | null;
  activeLayer: number;
  requiredLayerSwitchKey: KeyData | null;
}

const Keyboard: React.FC<KeyboardProps> = ({ keyboard, nextKey, activeLayer, requiredLayerSwitchKey }) => {
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

  return (
    <div>
      <div className="layer-switcher">
        {keyboard[0]?.keycodes.map((_: any, layer: number) => (
          <button
            key={layer}
            className={activeLayer === layer ? 'active' : ''}
          >
            Layer {layer}
          </button>
        ))}
      </div>
      <svg
        className="keyboard"
        width="100%"
        height="100%"
        viewBox="0 0 1200 500"
      >
        {keyboard.map((key, index) => {
          const keyId = `${key.x},${key.y}`;
          return (
            <Key
              key={index}
              {...key}
              keycode={key.keycodes[activeLayer]}
              isPressed={pressedKeys.has(String(key.keycodes[activeLayer]))}
              isNextKey={nextKey === key}
              isLayerSwitchKey={requiredLayerSwitchKey === key}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Keyboard;
