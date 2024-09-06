import React, { useState } from 'react';

const DocPanel = () => {
  const [selectedUrl, setSelectedUrl] = useState('');

  const apps = [
    { name: 'Uniswap', url: 'https://app.uniswap.org/' },
    { name: '1inch', url: 'https://app.1inch.io/' },
    { name: 'Denet', url: 'https://bugs.denet.pro' },
    { name: 'Revert Finance', url: 'https://revert.finance' },
  ];

  const handleClick = (url) => {
    setSelectedUrl(url);
  };

  return (
    <div>
      <h1>Документация</h1>
      <div style={{ marginBottom: '20px' }}>
        {apps.map((app, index) => (
          <button
            key={index}
            onClick={() => handleClick(app.url)}
            style={{ marginRight: '10px', padding: '10px' }}
          >
            {app.name}
          </button>
        ))}
      </div>
      {selectedUrl && (
        <iframe
          src={selectedUrl}
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc' }}
          title="App Iframe"
        />
      )}
    </div>
  );
};

export default DocPanel;