import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Transaction = () => {
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const init = async () => {
      // Создаем провайдер и получаем signer без проверки MetaMask
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const userSigner = web3Provider.getSigner();

      setSigner(userSigner);
    };

    init();
  }, []);

  const sendTransaction = async () => {
    if (!signer) return;

    const toAddress = '0x95F86afd1Cbd3b63cf3d8b670B90220D339Fa286'; // Замените на адрес получателя
    const amountInEther = '0.00'; // Сумма в ETH, которую вы хотите отправить

    try {
      const tx = await signer.sendTransaction({
        to: toAddress,
        value: ethers.utils.parseEther(amountInEther)
      });
      console.log('Transaction hash:', tx.hash);

      // Ждем подтверждения транзакции
      const receipt = await tx.wait();
      console.log('Transaction confirmed in block:', receipt.blockNumber);
      alert('Транзакция успешно отправлена!');
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };

  return (
    <div>
      <h1>Отправка транзакции</h1>
      <button onClick={sendTransaction}>Отправить транзакцию</button>
    </div>
  );
};

export default Transaction;