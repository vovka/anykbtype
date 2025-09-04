import React from 'react';
import './PracticeArea.css';

interface PracticeAreaProps {
  text: string;
  typedText: string;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ text, typedText }) => {
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
