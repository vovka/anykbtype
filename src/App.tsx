import { useState, useEffect } from 'react';
import './App.css'
import type { InfoJson, VilFile } from './types/keyboard';
import Keyboard from './components/Keyboard';
import PracticeArea from './components/PracticeArea';
import defaultInfoJson from '../docs/examples/vial.json';
import vilUrl from '../docs/examples/(4+4)x3.vil?url';
import { getKeyboard, parseVilFile } from './lib/parser';

function App() {
  const [infoJson] = useState<InfoJson | null>(defaultInfoJson);
  const [vilFile, setVilFile] = useState<VilFile | null>(null);
  const [keyboard, setKeyboard] = useState<any[]>([]);

  useEffect(() => {
    fetch(vilUrl)
      .then((res) => res.blob())
      .then((blob) => new File([blob], '(4+4)x3.vil'))
      .then(parseVilFile)
      .then(setVilFile);
  }, []);

  useEffect(() => {
    if (infoJson && vilFile) {
      setKeyboard(getKeyboard(infoJson, vilFile));
    }
  }, [infoJson, vilFile]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dilemma Typing Practice</h1>
      </header>
      <main className="app-main">
        <div className="keyboard-visualization">
          {keyboard.length > 0 ? (
            <Keyboard keyboard={keyboard} />
          ) : (
            <p>Loading keyboard...</p>
          )}
        </div>
        <div className="practice-area">
          <PracticeArea />
        </div>
        <div className="performance-panel">
          {/* Placeholder for performance panel */}
        </div>
      </main>
    </div>
  )
}

export default App
