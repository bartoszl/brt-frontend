import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { ethers, utils } from 'ethers';

export const useEthereum = () => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);

  const ethereumAvailable = useMemo(() => !!window.ethereum, []);

  const ethereumProvider = useMemo(() => {
    if (!ethereumAvailable) {
      return null;
    }

    return new ethers.providers.Web3Provider(window.ethereum);
  }, [ethereumAvailable]);

  const fetchEthAccountDetails = useCallback(async () => {
    if (ethereumAvailable) {
      const accounts = await ethereumProvider
        .send('eth_requestAccounts', []);

      const account = accounts[0];

      setAddress(account);

      const currentAccountBalance = await ethereumProvider
        .getBalance(account);

      const eth = ethers.utils.formatEther(currentAccountBalance);

      setBalance(eth);
    }
  }, [ethereumAvailable, ethereumProvider]);

  const fetchGasPrice = useCallback(async () => {
    const gas = utils.formatUnits(await ethereumProvider.getGasPrice(), 'gwei');

    setGasPrice(gas);
  }, [ethereumProvider]);

  useEffect(() => {
    if (ethereumAvailable && ethereumProvider.on) {
      setConnected(true);

      fetchEthAccountDetails();
      fetchGasPrice();
    }
  }, [ethereumAvailable, ethereumProvider.on, fetchEthAccountDetails, fetchGasPrice]);

  const connect = useCallback(async () => {
    ethereumProvider
      .send('eth_requestAccounts')
      .then((res) => {
        setAddress(res[0]);
        fetchEthAccountDetails();
      });
  }, [ethereumProvider, fetchEthAccountDetails]);

  return {
    connected,
    balance,
    address,
    ethereumAvailable,
    ethereumProvider,
    connect,
    gasPrice,
  };
};
