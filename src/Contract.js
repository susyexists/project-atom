import myNFT from "./MyNFT.json";
import { ethers, BigNumber } from "ethers";

const myNFTAddress = "Contract Address";

const getProvider = () => {
  if (window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    const NODE_URL = "RPC node url";
    return new ethers.providers.JsonRpcProvider(NODE_URL);
  }
};

const getContract = (provider) => {
  const contract = new ethers.Contract(myNFTAddress, myNFT.abi, provider);
  return contract;
};

export const handleMint = async (mintAmount, status, setStatus) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(myNFTAddress, myNFT.abi, signer);
    try {
      const response = await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
      });
      setStatus(false);
      const receipt = await response.wait();
      console.log(receipt);
      setStatus(true);
    } catch (err) {
      console.log("error: ", err);
    }
  }
};

export const readSupply = async (
  maxSupply,
  setMaxSupply,
  totalSupply,
  setTotalSupply
) => {
  const provider = getProvider();
  const contract = getContract(provider);
  const max = await contract.maxSupply();
  const maxNumber = max.toNumber();
  const total = await contract.totalSupply();
  const totalNumber = total.toNumber();
  setMaxSupply(maxNumber);
  setTotalSupply(totalNumber);
  //   return [maxNumber, totalNumber];
};
