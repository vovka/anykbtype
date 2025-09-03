import React, { useState, useEffect } from 'react';
import './PracticeArea.css';

const PracticeArea: React.FC = () => {
  const [text, setText] = useState('hello world');
  const [typedText, setTypedText] = useState('');

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
    <div className="practice-area">
      <div className="text-to-type">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={
              index < typedText.length
                ? typedText[index] === char
                  ? 'correct'
                  : 'incorrect'
                : 'pending'
            }
          >
            {char}
          </span>
        ))}
      </div>
      <div className="typed-text">{typedText}</div>
    </div>
  );
};

export default PracticeArea;
