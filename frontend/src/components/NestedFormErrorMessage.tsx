import { Text } from '@chakra-ui/react';
import React from 'react';

const NestedFormErrorMessage: React.FC<any> = (message) => {
  if (!message) {
    return null;
  }
  const errorMessage = typeof message === 'string' ? message : message.children;

  return (
    <Text mt={2} color="red.500" fontSize="sm">
      {errorMessage}
    </Text>
  );
};

export default NestedFormErrorMessage;
