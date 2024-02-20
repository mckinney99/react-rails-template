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
  PopoverFooter,
  Center,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import userApi from '../apis/userApi';
import { useAppDispatch } from '../hooks';
import { logout } from '../features/users/authSlice';

const NavigationMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await userApi.deleteLogOut();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      alert('Sign out failed.');
    }
  };

  const signInModal = (
    <Popover>
      <PopoverTrigger>
        <Button>Sign in</Button>
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

  console.log('test')

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
        {user?.role?.admin && (
          <ChakraLink
            as={ReactRouterLink}
            to="/admin"
            mr={12}
            _hover={{ textDecoration: 'none' }}
          >
            Admin
          </ChakraLink>
          )
        }
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
        {!user ? (
          signInModal
        ) : (
          <Button onClick={handleSignOut}>Sign out</Button>
        )}
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
