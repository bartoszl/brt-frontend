import { useMutation } from 'react-query';
import { ethers } from 'ethers';
import { useEthereumContext } from '../../../context/EthereumContext';
import { useVestingContract } from './useVestingContract';

export const useCreateVest = () => {
  const { ethereumProvider } = useEthereumContext();
  const VestingContract = useVestingContract();

  return useMutation(async (data) => {
    const signer = ethereumProvider.getSigner();

    const VestingContractWithSigner = VestingContract.connect(signer);

    const amount = ethers.utils.parseUnits(data.amount, 18);

    return VestingContractWithSigner.vest(data.address, amount);
  });
};
