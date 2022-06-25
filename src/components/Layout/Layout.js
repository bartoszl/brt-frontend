import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../TopBar';
import * as Styled from './styled';

export function Layout() {
  return (
    <Styled.Container>
      <TopBar />
      <Styled.Inner>
        <Outlet />
      </Styled.Inner>
    </Styled.Container>
  );
}
