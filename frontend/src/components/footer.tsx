import React from 'react';
import { Box, Text, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';

const Footer: React.FC = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400'); // Adjust text color based on color mode

  return (
    <Box as="footer" py={6} bg="gray.200" position="fixed" bottom="0" width="100%">
      <Box maxW="960px" mx="auto">
        <List display="flex" alignItems="center" justifyContent="center" textAlign="center">
          <ListItem>
            <Link mr={4}>Link 1</Link>
          </ListItem>
          <ListItem>
            <Link mr={4}>Link 2</Link>
          </ListItem>
          {/* Add more links as needed */}
        </List>
        <Text mt={4} color={textColor} textAlign="center">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
