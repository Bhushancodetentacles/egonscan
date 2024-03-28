import axios from "axios";
import { ethers } from "ethers";
import {
  useAccount,
  useContract,
  useNetwork,
  useProvider,
  useSigner,
} from "wagmi";
import abi from '../assets/abi/swap.json';
import erc20Abi from '../assets/abi/erc20.json';


function useContractUtilServices() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  // const provider = useProvider();
  const { data: signer } = useSigner({
    onError(error) {
      throw error;
    },
  });

  const isRPCWorking = async () => {
    try {
      let response = await axios.get(import.meta.env.VITE_APP_NETWORK_RPC);
      if (response.status == 200) {
        console.log("Network RPC is working.");
        return true;
      } else {
        throw new Error("Network RPC is down.");
      }
    } catch (error) {
      throw new Error("Network RPC is down.");
    }
  };


  let provider = new ethers.providers.JsonRpcProvider(
    import.meta.env.VITE_APP_NETWORK_RPC
  );
  
  const ROIWriteContract = useContract({
    address: import.meta.env.VITE_APP_CONTRACT_ADDRESS,
    abi: abi,
    signerOrProvider: signer,
  });

  const ROIReadContract = useContract({
    address: import.meta.env.VITE_APP_CONTRACT_ADDRESS,
    abi: abi,
    signerOrProvider: provider,
  });

  const getTokenContract = (tokenAddress) =>{

    return new ethers.Contract(tokenAddress, erc20Abi, signer)
  }

  const getTokenRead = (tokenAddress) =>{
    return new ethers.Contract(tokenAddress, erc20Abi, provider)
  }
 
  const isWalletConnected = () => {
    try {
      if (!address) {
        throw new Error("Your wallet is not connected!");
      } else if (chain.id != import.meta.env.VITE_APP_NETWORK_ID) {
        throw new Error("Wrong network detected");
      }
      return true;
    } catch (error) {
      throw error;
    }
  };

//   const getLotoGameWriteContract = () => {
//     return LotoGameWriteContract;
//   };

 
  const getWalletAddress = () => {
    return address
  }

  
  return {
    isWalletConnected,
    getWalletAddress,
    ROIWriteContract,
    ROIReadContract,
    isRPCWorking,
    getTokenContract,
    getTokenRead
  };
}

export default useContractUtilServices;
