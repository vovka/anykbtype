import { useState, useEffect, useMemo } from 'react';
import './App.css'
import type { InfoJson, VilFile } from './types/keyboard';
import Keyboard from './components/Keyboard';
import PracticeArea from './components/PracticeArea';
import FileLoader from './components/FileLoader';
import { getKeyboard, parseVilFile, parseInfoJson } from './lib/parser';

function App() {
  const [infoJson, setInfoJson] = useState<InfoJson | null>(null);
  const [vilFile, setVilFile] = useState<VilFile | null>(null);
  const [keyboard, setKeyboard] = useState<any[]>([]);
  const [text] = useState('hello world');
  const [typedText, setTypedText] = useState('');

  const { nextKey, activeLayer, requiredLayerSwitchKey } = useMemo(() => {
    const nextChar = text[typedText.length];
    if (!nextChar || keyboard.length === 0) {
      return { nextKey: null, activeLayer: 0, requiredLayerSwitchKey: null };
    }

    for (let layer = 0; layer < keyboard[0].keycodes.length; layer++) {
      const key = keyboard.find((k) => k.keycodes[layer] === `KC_${nextChar.toUpperCase()}`);
      if (key) {
        let requiredLayerSwitchKey = null;
        if (layer === 1) {
          requiredLayerSwitchKey = keyboard.find((k) => k.keycodes.includes('FN_MO13'));
        } else if (layer === 2) {
          requiredLayerSwitchKey = keyboard.find((k) => k.keycodes.includes('FN_MO23'));
        } else if (layer === 3) {
          // This assumes layer 3 is activated by a single key.
          // If it's a combination, this logic will need to be adjusted.
          requiredLayerSwitchKey = keyboard.find((k) => k.keycodes.includes('FN_MO13') || k.keycodes.includes('FN_MO23'));
        }
        return { nextKey: key, activeLayer: layer, requiredLayerSwitchKey };
      }
    }

    return { nextKey: null, activeLayer: 0, requiredLayerSwitchKey: null };
  }, [keyboard, text, typedText]);

  const handleFilesSelected = async (files: { vilFile: File; infoJsonFile: File }) => {
    const { vilFile, infoJsonFile } = files;
    const vil = await parseVilFile(vilFile);
    const json = await parseInfoJson(infoJsonFile);
    setVilFile(vil);
    setInfoJson(json);
  };

  useEffect(() => {
    if (infoJson && vilFile) {
      setKeyboard(getKeyboard(infoJson, vilFile));
    }
  }, [infoJson, vilFile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        setTypedText((prev) => prev.slice(0, -1));
      } else if (event.key.length === 1) {
        setTypedText((prev) => prev + event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dilemma Typing Practice</h1>
      </header>
      <main className="app-main">
        <div className="file-loader-area">
          <FileLoader onFilesSelected={handleFilesSelected} />
        </div>
        <div className="keyboard-visualization">
          {keyboard.length > 0 ? (
            <Keyboard
              keyboard={keyboard}
              nextKey={nextKey}
              activeLayer={activeLayer}
              requiredLayerSwitchKey={requiredLayerSwitchKey}
            />
          ) : (
            <p>Load info.json and .vil files to see the keyboard.</p>
          )}
        </div>
        <div className="practice-area">
          <PracticeArea text={text} typedText={typedText} />
        </div>
        <div className="performance-panel">
          {/* Placeholder for performance panel */}
        </div>
      </main>
    </div>
  )
}

export default App
