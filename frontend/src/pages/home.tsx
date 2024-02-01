// import logo from '../../logo.svg';
// import { Counter } from '../../features/counter/Counter';
import React from 'react';
import '../App.css';
import { Heading } from '@chakra-ui/react';
// import ContactForm from '../components/contactForm';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';
import ContactFormResults from '../components/ContactFormResults';
import LoginForm from '../components/LoginForm';
// import ContactFormResults from '../components/ContactFormResults';

const Home: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Heading mb="10">Welcome to Chakra + TS</Heading>
      {user ? <ContactFormResults /> : <LoginForm />}
    </>
  );
};

export default Home;
