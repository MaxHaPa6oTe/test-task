import React, { useState } from "react";

const ButtonSHA = () => {
  const [inputText, setInputText] = useState("");
  const [hash, setHash] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const calculateHash = async () => {
    // Используем Web Crypto API для генерации SHA-256 хэша
    const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(inputText));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
  };

  return (
    <div>
      <h1>SHA-256 Hasher</h1>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={handleChange}
        placeholder="Введите текст для хэширования"
      />
      <br />
      <button onClick={calculateHash}>Получить SHA-256</button>
      {hash && (
        <div>
          <h2>SHA-256 Hash:</h2>
          <p>{hash}</p>
        </div>
      )}
    </div>
  );
};

export default ButtonSHA;