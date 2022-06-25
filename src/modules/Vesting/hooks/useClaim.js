import { useMutation } from 'react-query';
import { useEthereumContext } from '../../../context/EthereumContext';
import { useVestingContract } from './useVestingContract';

export const useClaim = () => {
  const { ethereumProvider } = useEthereumContext();
  const VestingContract = useVestingContract();

  return useMutation(async () => {
    const signer = ethereumProvider.getSigner();

    const VestingContractWithSigner = VestingContract.connect(signer);

    return VestingContractWithSigner.claim();
  });
};
