import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import userApi from '../apis/userApi';
import { useAppDispatch } from '../hooks';
import { login } from '../features/users/authSlice';
const { log } = console;
const blankForm = {
  user: {
    email: 'admin9@test.com',
    password: 'testpassword',
  },
};
const LoginForm: React.FC = () => {
  const [newLogin, setNewLogin] = useState<any>(blankForm);
  const [errorMsg, setErrorMsg] = useState<string | null>();

  const dispatch = useAppDispatch();

  const handlePostLogin = async () => {
    try {
      const createdSession = await userApi.postLogin(newLogin);
      // we can do something with createdSession if we want
      setNewLogin(blankForm);

      //ts-ignore
      dispatch(login(createdSession.data));
      setErrorMsg(null);
      alert('Sign in successful!');
    } catch (error) {
      setErrorMsg('Sign in failed. Please try again.')
    }
  };

  return (
    <>
      <FormControl pb="5">
        { errorMsg ? <div test-id="error-container" style={{color: "red"}}>{errorMsg}</div> : null}
        <FormLabel color="black">Email</FormLabel>
        <Input
          color="black"
          placeholder="name@email.com"
          value={newLogin.user.email}
          onChange={(e) =>
            setNewLogin({
              ...newLogin,
              user: { ...newLogin.user, email: e.target.value },
            })
          }
        />
      </FormControl>
      <FormControl pb="5">
        <FormLabel color="black">Password</FormLabel>
        <Input
          color="black"
          type="password"
          placeholder="Password"
          role="password"
          value={newLogin.user.password}
          onChange={(e) =>
            setNewLogin({
              ...newLogin,
              user: { ...newLogin.user, password: e.target.value },
            })
          }
        />
      </FormControl>
      <Button onClick={handlePostLogin}>Submit</Button>
    </>
  );
};

export default LoginForm;
