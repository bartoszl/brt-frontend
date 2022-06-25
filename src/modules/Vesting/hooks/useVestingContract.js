import { ethers } from 'ethers';
import VestingContractData from '../Vesting.json';
import { useEthereumContext } from '../../../context/EthereumContext';

export const VestingContractAddress = '0x10010191BA096843EFd7b826208592b9ffD0336F';

export const useVestingContract = () => {
  const { ethereumProvider } = useEthereumContext();

  const VestingContract = new ethers.Contract(
    VestingContractAddress,
    VestingContractData.abi,
    ethereumProvider,
  );

  return VestingContract;
};
