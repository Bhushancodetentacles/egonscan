import React, { useState } from 'react';
import Papa from 'papaparse';
import { ethers } from 'ethers';
import useROIContractServices from "../../Services/useROIContractServices";
import { Errorhandler } from "../../Error/ErrorHandler";
import { toast } from "react-toastify";

function WhiteListAddress() {
  const [data, setData] = useState([]);
  const [investLoader, setInvestLoader] = useState(false);

  const {
    setWhitelisted,
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

  const HandleInvest = async () => {
    try {
        setInvestLoader(true);
        const addresses = data.map(item => item.Address);
            const response = await setWhitelisted(addresses);
            setInvestLoader(false);
             toast.success("Swapped successfully!");
             setTimeout(() => {
              location.reload()
             }, 3000);
       
    } catch (error) {
        setInvestLoader(false);
        if (!isRPCError(error)) Errorhandler(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        const filteredData = result.data.filter(row => {
          // Assuming the address is in a column named 'Address'
          const address = row['Address'];
          // Very simplistic check: an address usually contains numbers (e.g., street number)
          return address && ethers.utils.isAddress(address);
        });
        console.log('Filtered Data: ', filteredData);
        setData(filteredData);
      },
      header: true
    });
  };

  return (
    <section className=" flex flex-wrap items-center justify-between mx-auto p-4  swapscetion"  >
    <div className="container m-auto ">
      <h2 className="text-center m-5 heading" >EgonSwap Token Migration dapp</h2>
      <div className="grid grid-cols-1 gap-4 swapbox">
  
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {/* Display the data or do something with it here */}

      <div>
      <table className='table'>
            <thead>
              <th>Sr No.</th>
              <th>Address</th>
            </thead>
            <tbody>
      {data.map((row, index) => (
              <tr>
                <td>{index}</td>
                <td>{row.Address}</td>
              </tr>    
      ))}
      </tbody>
          </table>
        </div>
    </div>

    <div className='action'>
      <button type='submit' onClick={async () => await HandleInvest()} className=' w-full text-white swapbutton1 hover:bg-blue-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center  '>Submit</button>
    </div>
    </div>

        </div>

        </section>
  );
}

export default WhiteListAddress;
