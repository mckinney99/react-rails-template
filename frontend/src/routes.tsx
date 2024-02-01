import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signUp';
import ContactFormPage from './pages/ContactFormPage';
import { RootState } from './store';
import Admin from './pages/Admin';
import { useAppSelector } from './hooks';

export default function AppRoutes() {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactFormPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      {user?.role?.admin ? <Route path="/admin" element={<Admin />} /> : null}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

const NotFound = () => <div>unauthorized</div>;
