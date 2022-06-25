import React from 'react';
import { MintForm } from '../../components/MintForm/MintForm';
import { useTokenName } from '../../hooks/useTokenName';
import { useTokenSymbol } from '../../hooks/useTokenSymbol';
import { useTokenBalance } from '../../hooks/useTokenBalance';
import { BRTTokenAddress } from '../../hooks/useBRTTokenContract';

export function Main() {
  const { data: tokenName } = useTokenName();
  const { data: symbol } = useTokenSymbol();
  const { data: brtBalance } = useTokenBalance();

  return (
    <>
      <h1>
        {symbol}
        {' '}
        -
        {' '}
        { tokenName }
      </h1>
      <h3>
        {BRTTokenAddress}
      </h3>
      <p>
        Balance:
        {brtBalance}
      </p>
      <MintForm />
    </>
  );
}
