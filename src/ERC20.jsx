import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const TokenTransfer = () => {
  const [account, setAccount] = useState(null);
  const tokenAddress = '0x95F86afd1Cbd3b63cf3d8b670B90220D339Fa286'; 
  const tokenABI = [
    // Минимально необходимый ABI для transfer
    "function transfer(address to, uint amount) returns (bool)", 
  ];

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        console.error('MetaMask not detected!');
      }
    };
    
    connectWallet();
  }, []);

  const sendTokens = async (recipientAddress, amount) => {
    if (!account) {
      console.error('Wallet not connected');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
      const tx = await tokenContract.transfer(recipientAddress, ethers.utils.parseUnits(amount, 18)); // Убедитесь, что количество токенов правильно указывается
      await tx.wait(); // Ожидание завершения транзакции

      console.log('Transaction successful:', tx);
    } catch (error) {
      console.error('Error sending tokens:', error);
    }
  };

  return (
    <div>
      <h1>Token Transfer</h1>
      <input type="text" placeholder="Recipient Address" id="recipient" />
      <input type="number" placeholder="Amount" id="amount" />
      <button onClick={() => {
        const recipient = document.getElementById('recipient').value;
        const amount = document.getElementById('amount').value;
        sendTokens(recipient, amount);
      }}>
        Send Tokens
      </button>
    </div>
  );
};

export default TokenTransfer;