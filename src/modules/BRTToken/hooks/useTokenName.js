import { useQuery } from 'react-query';
import { useBRTTokenContract } from './useBRTTokenContract';

export const useTokenName = () => {
  const BRTContract = useBRTTokenContract();

  return useQuery(['BRT_TOKEN_NAME'], () => BRTContract.name());
};
