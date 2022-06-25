import { useMutation } from 'react-query';
import { ethers } from 'ethers';
import { useBRTTokenContract } from './useBRTTokenContract';
import { useEthereumContext } from '../../../context/EthereumContext';

export const useMintToken = () => {
  const { ethereumProvider } = useEthereumContext();
  const BRTContract = useBRTTokenContract();

  return useMutation(async (data) => {
    const signer = ethereumProvider.getSigner();

    const BRTContractWithSigner = BRTContract.connect(signer);

    const amount = ethers.utils.parseUnits(data.amount, 18);

    return BRTContractWithSigner.mint(data.address, amount);
  });
};
