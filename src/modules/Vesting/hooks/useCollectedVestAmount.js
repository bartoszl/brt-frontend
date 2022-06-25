import { useQuery } from 'react-query';
import { ethers } from 'ethers';
import { useEthereumContext } from '../../../context/EthereumContext';
import { useVestingContract } from './useVestingContract';

export const useCollectedVestAmount = () => {
  const { address } = useEthereumContext();
  const VestingContract = useVestingContract();

  return useQuery(['COLLECTED_VEST_AMOUNT'], async () => {
    const balance = await VestingContract.getCollectedAmountForAddress(address);

    return ethers.utils.formatUnits(balance, 18);
  }, {
    enabled: !!address,
  });
};
