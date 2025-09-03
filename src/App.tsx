import { useState, useEffect } from 'react';
import './App.css'
import { parseInfoJson } from './lib/parser';
import type { InfoJson } from './types/keyboard';
import Keyboard from './components/Keyboard';
import PracticeArea from './components/PracticeArea';
import defaultInfoJson from '../docs/examples/vial.json';

function App() {
  const [infoJson, setInfoJson] = useState<InfoJson | null>(defaultInfoJson);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dilemma Typing Practice</h1>
      </header>
      <main className="app-main">
        <div className="keyboard-visualization">
          {infoJson ? (
            <Keyboard infoJson={infoJson} />
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
