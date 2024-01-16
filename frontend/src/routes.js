import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signUp';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
