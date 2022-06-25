import { useQuery } from 'react-query';
import { ethers } from 'ethers';
import { useBRTTokenContract } from './useBRTTokenContract';
import { useEthereumContext } from '../../../context/EthereumContext';

export const useTokenBalance = () => {
  const { address } = useEthereumContext();
  const BRTContract = useBRTTokenContract();

  return useQuery(['BRT_TOKEN_BALANCE', address], async () => {
    const balance = await BRTContract.balanceOf(address);

    return ethers.utils.formatUnits(balance, 18);
  });
};
