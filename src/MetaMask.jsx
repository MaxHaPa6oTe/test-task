import React from "react";

const ethers = require("ethers")

const MetaMask = () => {
  const [account, setAccount] = React.useState(null);
  const [error, setError] = React.useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError('Мета-маска не установлена.');
    }
  };

  React.useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };

    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      <h1>Connect to MetaMask</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && <p>Connected account: {account}</p>}
    </div>
  );
};

export default MetaMask;