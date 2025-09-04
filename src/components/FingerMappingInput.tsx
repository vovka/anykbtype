import React from 'react';

interface FingerMappingInputProps {
  value: string;
  onChange: (value: string) => void;
}

const FingerMappingInput: React.FC<FingerMappingInputProps> = ({ value, onChange }) => {
  return (
    <div className="finger-mapping-input">
      <label htmlFor="finger-mapping">Finger Mapping:</label>
      <textarea
        id="finger-mapping"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., 0,0;0,1;0,2;..."
      />
    </div>
  );
};

export default FingerMappingInput;
