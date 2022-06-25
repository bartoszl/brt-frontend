import React, { createContext, useContext } from 'react';
import { useEthereum } from '../hooks/useEthereum';

const EthereumContext = createContext({});

export function EthereumContextProvider({ children }) {
  const ethereumState = useEthereum();

  return (
    <EthereumContext.Provider value={ethereumState}>
      { children }
    </EthereumContext.Provider>
  );
}

export const useEthereumContext = () => useContext(EthereumContext);
