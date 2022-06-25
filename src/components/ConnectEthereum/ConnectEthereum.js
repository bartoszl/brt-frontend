import React from 'react';
import * as Styled from './styled';
import { useEthereumContext } from '../../context/EthereumContext';
import { round, truncateAddress } from './helpers';

export function ConnectEthereum() {
  const {
    connected,
    balance,
    address,
    connect,
    gasPrice,
  } = useEthereumContext();

  if (connected) {
    return (
      <>
        <Styled.InformationBox>
          <Styled.InformationBoxLabel>
            Gas:
          </Styled.InformationBoxLabel>
          { `${round(gasPrice, 3)} gwei` }
        </Styled.InformationBox>
        <Styled.InformationBox>
          <Styled.InformationBoxLabel>
            Balance:
          </Styled.InformationBoxLabel>
          { `${round(balance)} ETH` }
        </Styled.InformationBox>
        <Styled.Button>
          { truncateAddress(address) }
        </Styled.Button>
      </>
    );
  }

  return (
    <Styled.Button type="button" onClick={connect}> Connect </Styled.Button>
  );
}
