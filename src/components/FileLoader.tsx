import React from 'react';
import './FileLoader.css';

interface FileLoaderProps {
  onFilesSelected: (files: { vilFile: File; infoJsonFile: File }) => void;
}

const FileLoader: React.FC<FileLoaderProps> = ({ onFilesSelected }) => {
  const vilFileInputRef = React.useRef<HTMLInputElement>(null);
  const infoJsonFileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    const vilFile = vilFileInputRef.current?.files?.[0];
    const infoJsonFile = infoJsonFileInputRef.current?.files?.[0];

    if (vilFile && infoJsonFile) {
      onFilesSelected({ vilFile, infoJsonFile });
    }
  };

  return (
    <div className="file-loader">
      <div>
        <label htmlFor="vil-file-input">Vial Keymap (.vil):</label>
        <input
          id="vil-file-input"
          type="file"
          accept=".vil"
          ref={vilFileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="info-json-file-input">QMK Layout (info.json):</label>
        <input
          id="info-json-file-input"
          type="file"
          accept=".json"
          ref={infoJsonFileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileLoader;
