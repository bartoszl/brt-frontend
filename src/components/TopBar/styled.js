import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  background-color: yellow;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopBarSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0 1rem 0 0;
  padding: 0;
  font-size: 1.25rem;
`;

export const Nav = styled(NavLink)`
  padding: 0 0.5rem;
  text-decoration: none;
  color: black;
`;
