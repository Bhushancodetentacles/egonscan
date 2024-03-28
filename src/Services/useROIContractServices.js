import React from "react";
import useContractUtilServices from "./useContractUtilServices";

import { ethers } from "ethers";

function useROIContractServices() {
  const { ROIReadContract, ROIWriteContract, isWalletConnected,getTokenContract,getTokenRead } =
    useContractUtilServices();

  const provider = new ethers.providers.JsonRpcProvider(
    import.meta.env.VITE_APP_NETWORK_RPC
  );

  const Invest = async (amount) => {
    try {
      if (isWalletConnected()) {
        let response = await ROIWriteContract.exchange(amount)
        response = await response.wait(2);
       
        return response;

    }
    } catch (error) {
      throw error;
    }
  };

  const setWhitelisted = async (users) => {
    try {
      if (isWalletConnected()) {
        let response = await ROIWriteContract.setWhitelisted(users)
        response = await response.wait(2);
       
        return response;

    }
    } catch (error) {
      throw error;
    }
  };

  

  const amountAfterSwap = async (amount) => {
    try {
      let response = await ROIReadContract.amountAfterSwap(amount);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getTokenDetails = async () => {
    try {
      let response = await ROIReadContract.getTokenDetails();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getDeposits = async (walletAddress) => {
    try {
      let response = await ROIReadContract.getDeposits(walletAddress);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const nextSwapAvailableIn = async (walletAddress) => {
    try {
      let response = await ROIReadContract.nextSwapAvailableIn(walletAddress);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const maxSwapPercentage = async()=>{
    try {
      let response = await ROIReadContract.maxSwapPercentage();
      return response;
    } catch (error) {
      throw error;
    }
  }

  const checkAllowance = async(tokenAddress,walletAddress) =>{
    try {
      let tokenContract = getTokenContract(tokenAddress);
      let response = await tokenContract.allowance(walletAddress,import.meta.env.VITE_APP_CONTRACT_ADDRESS);
      return response;
    } catch (error) {
      throw error;
    }
  }

  const approve = async(tokenAddress,amount) =>{
    try {
      let tokenContract = getTokenContract(tokenAddress);
      let response = await tokenContract.approve(import.meta.env.VITE_APP_CONTRACT_ADDRESS,amount);
      return response;
    } catch (error) {
      throw error;
    }
  }

  const tokenBalance = async(tokenAddress,walletAddress) =>{
    try {
      let tokenContract = getTokenRead(tokenAddress);
      let response = await tokenContract.balanceOf(walletAddress);
      return response
      } catch (error) {
      throw error;
    }
  }

  const nativeTokenBalance = async(walletAddress) =>{
    try {
      let response = await provider.getBalance(walletAddress);
      return response;
    } catch (error) {
      throw error;
    }
  }

  return {
    Invest,
    amountAfterSwap,
    getTokenDetails,
    getDeposits,
    nextSwapAvailableIn,
    checkAllowance,
    approve,
    tokenBalance,
    nativeTokenBalance,
    maxSwapPercentage,
    setWhitelisted
  };
}

export default useROIContractServices;
