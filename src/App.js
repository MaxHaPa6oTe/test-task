import AesEncryptor from "./AesEncryptor";
import Balance from "./Balance";
import ButtonSHA from "./ButtonSHA";
import Decoding from "./Decoding";
import DocPanel from "./DocPannel";
import DocPanel2 from "./DocPannel2";
import ERC20 from "./ERC20";
import MetaMask from "./MetaMask";
import Transaction from "./Transaction";

function App() {
  return (
    <div>
     <MetaMask />
     <ButtonSHA />
     <DocPanel />
     <AesEncryptor />
     <Decoding />
     <DocPanel2 />
     <Balance />
     <Transaction />
     <ERC20 />
    </div>
  );
}

export default App;
