import React from 'react';
import * as Styled from './styled';
import { ConnectEthereum } from '../ConnectEthereum';

export function TopBar() {
  return (
    <Styled.Container>
      <Styled.TopBarSection>
        <Styled.Title>
          Super cool DApp
        </Styled.Title>
        <Styled.Nav to="/">
          BRTToken Contract
        </Styled.Nav>
        <Styled.Nav to="/vesting">
          Vesting Contract
        </Styled.Nav>
      </Styled.TopBarSection>
      <Styled.TopBarSection>
        <ConnectEthereum />
      </Styled.TopBarSection>
    </Styled.Container>
  );
}
