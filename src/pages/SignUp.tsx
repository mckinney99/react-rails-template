import React from 'react';
import '../App.css';
import { Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from 'react';
import userApi from '../apis/userApi';

const blankForm = {
  user: {
    email: '',
    password: ''
  }
}

const SignUp: React.FC = () => {
  const [newSignup, setNewSignup] = useState<any>(blankForm);

  const handleSubmit = async () => {
    try {
      await userApi.postSignUp(newSignup);
      alert('Sign up successful!');
    } catch (error) {
      alert('Sign up failed. Please try again.');
    }
  };

  return (
    <>
      <Heading mb="10">SIGN UP</Heading>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          mb="10"
          value={newSignup.email}
          onChange={(e) =>
            setNewSignup({
              ...newSignup,
              user: { ...newSignup.user, email: e.target.value },
            })
          }
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          mb="10"
          value={newSignup.password}
          onChange={(e) =>
            setNewSignup({
              ...newSignup,
              user: { ...newSignup.user, password: e.target.value },
            })
          }
        />
        <FormLabel>Verify Password</FormLabel>
        <Input type="password" />
        <Button onClick={handleSubmit} colorScheme="blue" mt={4} type="submit">
          Sign Up
        </Button>
      </FormControl>
    </>
  );
};

export default SignUp;
