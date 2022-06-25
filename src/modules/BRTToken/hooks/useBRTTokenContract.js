import { ethers } from 'ethers';
import BRTTokenData from '../BRTToken.json';
import { useEthereumContext } from '../../../context/EthereumContext';

export const BRTTokenAddress = '0x58BC94e046bEC83cFc5Eb4aa86C9DEdEafE2CBe4';

export const useBRTTokenContract = () => {
  const { ethereumProvider } = useEthereumContext();

  const BRTTokenContract = new ethers.Contract(BRTTokenAddress, BRTTokenData.abi, ethereumProvider);

  return BRTTokenContract;
};
