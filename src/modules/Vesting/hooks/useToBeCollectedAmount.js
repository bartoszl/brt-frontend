import { useQuery } from 'react-query';
import { ethers } from 'ethers';
import { useEthereumContext } from '../../../context/EthereumContext';
import { useVestingContract } from './useVestingContract';

export const useToBeCollectedAmount = () => {
  const { address } = useEthereumContext();
  const VestingContract = useVestingContract();

  return useQuery(['CURRENT_VEST_AMOUNT'], async () => {
    const balance = await VestingContract.getCurrentVestAmountForAddress(address);

    return ethers.utils.formatUnits(balance, 18);
  }, {
    enabled: !!address,
  });
};
