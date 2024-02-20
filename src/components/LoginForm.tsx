import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import userApi, { User, parentUser } from '../apis/userApi';
import { useAppDispatch } from '../hooks';
import { login } from '../features/users/authSlice';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, FormikHelpers, Form } from 'formik';
import NestedFormErrorMessage from './NestedFormErrorMessage';

const blankForm: parentUser = {
  user: {
    email: 'admin9@test.com',
    password: 'testpassword',
  },
};
const LoginForm: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });
  const handleSubmit = async (
    values: User,
    { setSubmitting }: FormikHelpers<User>
  ): Promise<void> => {
    try {
      const createdSession = await userApi.postLogin({ user: values });
      // Do something with createdSession if needed
      setSubmitting(false);

      const token = createdSession.headers.authorization.split(' ')[1];
      localStorage.setItem('token', token);

      dispatch(login(createdSession.data.data));
      setErrorMsg(null);
      alert('Sign in successful!');
      navigate('/');
    } catch (error) {
      setErrorMsg('Sign in failed. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={blankForm.user}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {errorMsg ? (
          <Alert test-id="error-container" status="error">
            <AlertIcon />
            {errorMsg}
          </Alert>
        ) : null}
        <FormControl pb="5">
          <FormLabel color="black">Email</FormLabel>
          <ErrorMessage name="email" component={NestedFormErrorMessage} />
          <Field
            as={Input}
            name="email"
            type="email"
            color="black"
            placeholder="name@email.com"
          />
        </FormControl>
        <FormControl pb="5">
          <FormLabel color="black">Password</FormLabel>
          <ErrorMessage name="password" component={NestedFormErrorMessage} />
          <Field
            as={Input}
            name="password"
            type="password"
            color="black"
            placeholder="Password"
            role="password"
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
