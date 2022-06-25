import { useQuery } from 'react-query';
import { useBRTTokenContract } from './useBRTTokenContract';

export const useTokenSymbol = () => {
  const BRTContract = useBRTTokenContract();

  return useQuery(['BRT_TOKEN_SYMBOL'], () => BRTContract.symbol());
};
