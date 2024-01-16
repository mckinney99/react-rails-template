import React from 'react';
import './App.css';
import AppRoutes from './routes';
import NavigationMenu from './components/navigationMenu';
import Footer from './components/footer';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <>
      <NavigationMenu />
      <Flex justifyContent="center">
        <Box
          maxW="1200px"
          w="100%"
          px={['1rem', '3rem', '4rem']} // Responsive padding for different viewports
          py={['1rem', '1.5rem', '2rem']} // Responsive padding for different viewports
        >
          <AppRoutes />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default App;
