export const handleDecrement = (mintAmount, setMintAmount) => {
  if (mintAmount <= 1) return;
  setMintAmount(mintAmount - 1);
};
export const handleIncrement = (mintAmount, setMintAmount) => {
  if (mintAmount >= 3) return;
  setMintAmount(mintAmount + 1);
};
export const connectAccount = async (accounts, setAccounts) => {
  if (window.ethereum) {
    const userAccount = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccounts(userAccount);
  }
};
