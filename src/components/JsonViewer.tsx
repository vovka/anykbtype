import React from 'react';

interface JsonViewerProps {
  data: unknown;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ data }) => {
  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export default JsonViewer;
