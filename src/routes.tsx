import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import ContactFormPage from './pages/ContactFormPage';
import Admin from './pages/Admin';
import RequireAuth from './components/RequireAuth';
import LoginForm from './components/LoginForm';
import Stripe from './components/Stripe';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/pay" element={<Stripe amount={100} currency={'usd'}/>} />
      </Route>
      <Route path="/contact" element={<ContactFormPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<LoginForm />} />
      <Route element={<RequireAuth role={'admin'} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

const NotFound = () => <div>unauthorized</div>;
