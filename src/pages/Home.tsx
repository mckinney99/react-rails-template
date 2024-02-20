import React from 'react';
import '../App.css';
import { Heading } from '@chakra-ui/react';
import ContactFormResults from '../components/ContactFormResults';

const Home: React.FC = () => {
  return (
    <>
      <Heading mb="10">Welcome to Chakra + TS</Heading>
      <ContactFormResults />
    </>
  );
};

export default Home;
