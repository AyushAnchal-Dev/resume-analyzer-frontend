import { ethers } from "ethers";
import { contractABI } from "./abi";

// ✅ Load from CRA .env using REACT_APP_
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

if (!CONTRACT_ADDRESS) {
  throw new Error("❌ CONTRACT_ADDRESS is undefined. Check your .env file and variable name.");
}



export const getEthereumContract = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask to use this feature.");
    return null;
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
    return contract;
  } catch (error) {
    console.error("❌ Error creating contract instance:", error);
    alert("Failed to connect to the Ethereum contract. Please try again.");
    return null;
  }
};