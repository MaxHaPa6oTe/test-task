import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const App = () => {
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      const address = '0x95F86afd1Cbd3b63cf3d8b670B90220D339Fa286';

      const polygonProvider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com');

      setProvider(polygonProvider); 

      // Получаем баланс
      const balance = await polygonProvider.getBalance(address);
      setBalance(ethers.utils.formatEther(balance)); // Преобразуем в эфир
    };

    init();
  }, []);

  return (
    <div>
      <h1>Баланс:</h1>
      {balance !== null ? <p>{balance} ETH</p> : <p>Загрузка...</p>}
    </div>
  );
};

export default App;