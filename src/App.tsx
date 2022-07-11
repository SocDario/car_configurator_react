import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Layout } from 'shared';
import { Home, Login, Register } from 'views';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};