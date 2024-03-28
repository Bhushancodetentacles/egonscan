
import React from 'react';
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Public from './Routes/Public';
import '@rainbow-me/rainbowkit/styles.css';
import { initFlowbite } from "flowbite"; 
import {
  RainbowKitProvider, 
  lightTheme, getDefaultWallets
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  polygonMumbai
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const avalanche = {
  id: 271,
  name: 'Egon',
  network: 'Egon',
  iconUrl: 'https://egonscan.com/images/egon-scan-mainnet-black-fa614015f098c3914342c791a76a729f.png?vsn=d',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'EGON',
    symbol: 'EGON',
  },
  rpcUrls: {
    public: { http: [import.meta.env.VITE_APP_NETWORK_RPC] },
    default: { http: [import.meta.env.VITE_APP_NETWORK_RPC] },
  },
  blockExplorers: {
    default: { name: 'EGONTEST', url: 'https://rpc.egonscan.com' },
    etherscan: { name: 'EGONTEST', url: 'https://rpc.egonscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [avalanche],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'c6c87cc10f645e92f464fc998ce1f0a0',
  chains
});

const wagmiConfig = createClient({
  autoConnect: true,
  connectors,
  provider
})
function App() {
  useEffect(() => {
    initFlowbite();
  });
  return (
    <>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        closeButton={
          <button
            style={{
              width: "30px",
              backgroundColor: "inherit",
              border: "none",
              color: "white",
            }}
          >
            X
          </button>
        }
      />
      <WagmiConfig  client={wagmiConfig}>
        <RainbowKitProvider coolMode chains={chains} modalSize="compact" theme={
lightTheme({

          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small', 
          connectButtonText: "#000",


        })}>
          <BrowserRouter>
            <Public />
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>

    </>
  )
}
export default App
