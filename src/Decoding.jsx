import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Decoding = () => {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  
  const handleEncrypt = () => {
    if (!key) {
      alert('Введите ключ для шифрования');
      return;
    }
    const ciphertext = CryptoJS.AES.encrypt(inputText, key).toString();
    setEncryptedText(ciphertext);
    setDecryptedText('');
  };

  const handleDecrypt = () => {
    if (!key) {
      alert('Введите ключ для дешифрования');
      return;
    }
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, key);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(originalText);
    } catch (error) {
      alert('Ошибка: неверный ключ или зашифрованный текст.');
    }
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
      <br />
      <button onClick={handleDecrypt}>Расшифровать</button>
      {decryptedText && (
        <div>
          <h2>Исходный текст:</h2>
          <p>{decryptedText}</p>
        </div>
      )}
    </div>
  );
};

export default Decoding;