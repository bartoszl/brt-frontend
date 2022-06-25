import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { Main as MainBRTScreen } from '../../modules/BRTToken/screens/Main';
import { Main as MainVestingScreen } from '../../modules/Vesting/screens/Main';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainBRTScreen />} />
          <Route path="vesting" element={<MainVestingScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
