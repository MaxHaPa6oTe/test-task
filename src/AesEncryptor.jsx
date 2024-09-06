import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const AesEncryptor = () => {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleEncrypt = () => {
    if (!key) {
      alert('Введите ключ для шифрования!');
      return;
    }
    const ciphertext = CryptoJS.AES.encrypt(inputText, key).toString();
    setEncryptedText(ciphertext);
  };

  return (
    <div>
      <h1>AES Encryptor</h1>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Введите текст для шифрования"
      />
      <br />
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Введите ключ"
      />
      <br />
      <button onClick={handleEncrypt}>Зашифровать</button>
      {encryptedText && (
        <div>
          <h2>Зашифрованный текст:</h2>
          <p>{encryptedText}</p>
        </div>
      )}
    </div>
  );
};

export default AesEncryptor;