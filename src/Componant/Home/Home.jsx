import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftRight } from 'lucide-react';
import "./Home.css"
import { useAccount } from "wagmi";
import useROIContractServices from "../../Services/useROIContractServices";
import Counter from "./../Counter";
import { Errorhandler } from "../../Error/ErrorHandler";
import { toast } from "react-toastify";
import {ethers} from "ethers";
function Home() {

  const { isConnected, address } = useAccount();
  const [tokenDetails, setTokenDetails] = useState([0,0,0]);
  const [balanceDetails, setBalanceDetails] = useState([0,0,0,0]);
  const [tokenData, setTokenData] = useState();
  const [nextDate,setNextDate] = useState(0);
  const [investLoader, setInvestLoader] = useState(false);
  const inputRef = useRef(null);

  const {
    Invest,
    amountAfterSwap,
    getTokenDetails,
    nextSwapAvailableIn,
    checkAllowance,
    approve,
    tokenBalance,
    nativeTokenBalance,
    maxSwapPercentage
} = useROIContractServices();

const isRPCError = (e) => {
  if (
      e.event === "noNetwork" &&
      e.code === "NETWORK_ERROR" &&
      isRpcWorking.current
  ) {
      isRpcWorking.current = false;
      toast.error("Network rpc is down!");
      return true;
  }
  return false;
};


const CalculateTokens= async () => {
  let amount = inputRef.current.value;
  const bigIntValue = BigInt(Number(amount*(10**tokenData[0].decimals)+"").toLocaleString('fullwide', { useGrouping: false }));

  const swapAmount = ethers.BigNumber.from(bigIntValue.toString());

  const userData = await amountAfterSwap(swapAmount+"");
  
  setTokenDetails(userData);
}


const fetchData = async () => {
  const _tokenData = await getTokenDetails();
  setTokenData(_tokenData);
  
  if(isConnected && ethers.utils.isAddress(address)){
    const _nextDate = await nextSwapAvailableIn(address);
    setNextDate(_nextDate);
    let balanceToken=[0,0,0,0];
    for(let i=0;i<4;i++){
    if(_tokenData[i].token=="0x0000000000000000000000000000000000000000"){
      balanceToken[i] = await nativeTokenBalance(address)
    }
    else{
      balanceToken[i] = await tokenBalance(_tokenData[i].token,address);
    }
    if(i==0){
    const max = await maxSwapPercentage();
    inputRef.current.value = ((balanceToken[i]/10**(_tokenData[i].decimals))/max);
    const bigIntValue = BigInt(Number(inputRef.current.value*(10**_tokenData[0].decimals)+"").toLocaleString('fullwide', { useGrouping: false }));

    const swapAmount = ethers.BigNumber.from(bigIntValue.toString());

    const userData = await amountAfterSwap(swapAmount+"");
  
    setTokenDetails(userData);
  }
    
  }
    setBalanceDetails(balanceToken);
}
}

useEffect(() => {
  
  fetchData();

},[isConnected,address]);



function hexToInt(_num)
{
    let num = parseInt(_num._hex,16);
    return num
}

function showBalance(index){
  const balance = parseFloat((balanceDetails[index]/(10**(tokenData[index].decimals))).toFixed(2));
  
  return balance;

}

const HandleInvest = async () => {
  try {
    const amount = inputRef.current.value;
      setInvestLoader(true);
      const swapAmount = (amount*(10**tokenData[0].decimals));
      const bigIntValue = BigInt(Number(swapAmount+"").toLocaleString('fullwide', { useGrouping: false }));

      const swapAmountBig = ethers.BigNumber.from(bigIntValue.toString());

      const allowedAmount = await checkAllowance(tokenData[0].token,address);
      
      if(allowedAmount < swapAmount){
        let txn = await approve(tokenData[0].token,swapAmountBig+"");
      }
      if (amount >= 0) {
          const response = await Invest(swapAmountBig+"");
          setInvestLoader(false);
           toast.success("Swapped successfully!");
      } else {
          setInvestLoader(false);
          throw new Error("Invalid amount");
      }
  } catch (error) {
      setInvestLoader(false);
      if (!isRPCError(error)) Errorhandler(error);
  }
};


  return (
    <section className=" flex flex-wrap items-center justify-between mx-auto p-4  swapscetion"  >
      <div className="container m-auto ">
        <h2 className="text-center m-5 heading" >EgonSwap Token Migration dapp</h2>
        <div className="grid grid-cols-1 gap-4 swapbox">



          <div className="col-span-1">

            <div className="w-full swapcard      ">
              <div className='p-4 sm:p-6 md:p-8 bg-white' style={{margin:"3px"}} >
                <div className="countdown">
                  <h4 id="headline" className="mb-5 text-center">Next converting in . . .</h4>
                  <div id="countdown" className="" >
                   
                    {nextDate>0 ? ( <Counter
                                    timestamp={(hexToInt(nextDate))*1000}
                                />) : (<p></p>)
                                }
                      
                  </div>

                </div>
                <form className="space-y-6" action="#">
                  <h5 className="text-xl mt-5 font-medium  dark:text-white text-center">EgonSwap Distribution DAPP</h5>
                  <div className="flex  gap-2 mt-0" >
                    <div className="w-full" >
                      <div>
                       <div className="flex justify-between w-full" >
                       <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                        ECT</label>
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                         Balance {balanceDetails[0]!=0 ? showBalance(0) : 0}</label>
                       </div>
                        <input type="text" ref={inputRef} onBlur={CalculateTokens} id="first_name"
                         className="    block w-full p-2.5   " placeholder="Enter Amount" required />
                      </div>
                      <div>
                        <div className="flex justify-between w-full">
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                        EgonCoin [ 100% ]</label>
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                         Balance {balanceDetails[1]!=0 ? showBalance(1) : 0}</label>
                        </div>
                        <input type="number" id="first_name" value={tokenData!==undefined ? tokenDetails[0]/(10**tokenData[1].decimals) : ''} className="    block w-full p-2.5   " placeholder="Token 1" required readOnly />
                      </div>
                     <div>
                        <div className="flex justify-between w-full"> 
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                        Catapult Token 1:100</label>
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                         Balance {balanceDetails[2]!=0 ? showBalance(2) : 0}</label>
                        </div>
                        <input type="number" id="first_name" value={tokenData!==undefined ? tokenDetails[1]/(10**tokenData[2].decimals) : ''} className="    block w-full p-2.5   " placeholder="Token 1" required readOnly />
                      </div>
                       <div>
                        <div className="flex justify-between w-full">
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                        Egon-Inu 1:500</label>
                        <label htmlFor="first_name" className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                         Balance {balanceDetails[3]!=0 ? showBalance(3) : 0}</label>
                        </div>
                        <input type="number" id="first_name" value={tokenData!==undefined ? tokenDetails[2]/(10**tokenData[3].decimals) : ''}  className="    block w-full p-2.5   " placeholder="Token 1" required readOnly />

                      </div>
                    </div>
                    {/* <div style={{ margin: "30px 15px 0" }} >
                    <ArrowLeftRight className="SwapIcon" />
                  </div> */}
                    {/* <div className="w-full">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium  dark:text-white">To</label>
                    <select id="countries" className="   text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 ">
                      <option selected>ETHEREUM</option>
                      <option value="US">TRON</option>
                      <option value="CA">BNB</option>
                      <option value="FR">MATIC</option>
                    </select>
                  </div> */}
                  </div>

                  <div className="text-end">
                    <button type="submit" onClick={async () => await HandleInvest()}
                                            disabled={investLoader} className=" w-full text-white swapbutton1 hover:bg-blue-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                                              {investLoader ? "Waiting for txn..." : "Swap"}</button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
