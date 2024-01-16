// import logo from '../../logo.svg';
// import { Counter } from '../../features/counter/Counter';
import React from 'react';
import '../App.css';
import { Heading } from "@chakra-ui/react";
import ContactForm from '../components/contactForm';

const Home: React.FC = () => {
  return (
    <>
      <Heading mb="10">Welcome to Chakra + TS</Heading>
      <ContactForm/>
    </>
  );
}

export default Home;
