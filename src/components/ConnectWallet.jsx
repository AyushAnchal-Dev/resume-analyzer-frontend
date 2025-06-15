import React from 'react';

const ConnectWallet = ({ setAccount }) => {
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found. Please install it to continue.");
      return;
    }

    try {
      // Force MetaMask to show permission popup
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        alert("No accounts found.");
      }
    } catch (err) {
      console.error("MetaMask connection error:", err);
      alert("Wallet connection failed or was rejected.");
    }
  };

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={connectWallet}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;