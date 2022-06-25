import React from 'react';
import { css, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './components/AppRoutes';
import { EthereumContextProvider } from './context/EthereumContext';

const queryClient = new QueryClient();

function GlobalStyles() {
  return (
    <Global styles={css`
      * {
        box-sizing: border-box;
      }
      
      body {
        padding: 0;
        margin: 0;
      }
    `}
    />
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EthereumContextProvider>
        <AppRoutes />
        <GlobalStyles />
      </EthereumContextProvider>
    </QueryClientProvider>
  );
}

export default App;
