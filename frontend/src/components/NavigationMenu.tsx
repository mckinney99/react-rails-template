import React from 'react';
import {
  Box,
  Flex,
  Link,
  Spacer,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Popover,
  PopoverTrigger,
  Button,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  Center,
  Link as ChakraLink,
  LinkProps,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const NavigationMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state: RootState) => state.auth.user);

  const loginText = user ? 'Sign out' : 'Sign in';

  const signInModal = (
    <Popover>
      <PopoverTrigger>
        <Button>{loginText}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <LoginForm />
        </PopoverBody>
        <PopoverFooter textAlign="center">
          <ChakraLink
            as={ReactRouterLink}
            to="/sign-up"
            color="black"
            fontWeight="bold"
            _hover={{ textDecoration: 'none' }}
          >
            Create a new account
          </ChakraLink>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );

  return (
    <Center bg="blue.500" color="white" p={4} display="flex">
      <Text ml={10} fontSize="xl" fontWeight="bold">
        Your Logo
      </Text>
      <Spacer />
      <Flex
        display={{ base: 'none', md: 'flex' }}
        align="center"
        color="white"
        mr={10}
      >
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          mr={12}
          _hover={{ textDecoration: 'none' }}
        >
          Home
        </ChakraLink>
        <ChakraLink mr={12} _hover={{ textDecoration: 'none' }}>
          About
        </ChakraLink>
        <ChakraLink mr={12} _hover={{ textDecoration: 'none' }}>
          Services
        </ChakraLink>

        <ChakraLink
          as={ReactRouterLink}
          to="/contact"
          mr={12}
          _hover={{ textDecoration: 'none' }}
        >
          Contact
        </ChakraLink>
        {signInModal}
      </Flex>
      <IconButton
        aria-label="Open menu"
        display={{ base: 'flex', md: 'none' }}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
        variant="ghost"
        color="white"
      />
      {isOpen && (
        <Box py={4} textAlign="center">
          <Stack spacing={4}>
            <Link onClick={onClose} _hover={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Link onClick={onClose} _hover={{ textDecoration: 'none' }}>
              About
            </Link>
            <Link onClick={onClose} _hover={{ textDecoration: 'none' }}>
              Services
            </Link>
            <Link onClick={onClose} _hover={{ textDecoration: 'none' }}>
              Contact
            </Link>
            {signInModal}
          </Stack>
        </Box>
      )}
    </Center>
  );
};

export default NavigationMenu;
