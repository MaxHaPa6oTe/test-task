import React, { useState, useEffect } from 'react';

const DocPanel2 = () => {
  const [apps, setApps] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState('');

  useEffect(() => {
    const loadApps = async () => {
      const response = await fetch('/saits.json'); 
      const data = await response.json();
      setApps(data);
      console.log(data);
    };

    loadApps();
  }, []);

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

export default DocPanel2;