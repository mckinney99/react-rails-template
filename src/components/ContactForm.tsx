import React, { useState } from 'react';
import {
  Textarea,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import messageApi, { Message } from '../apis/messageApi';
import NestedFormErrorMessage from './NestedFormErrorMessage';

const blankMessage: Message = {
  id: 0,
  datetime: new Date(),
  senderEmail: '',
  subject: '',
  body: '',
};

const ContactForm: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (
    values: Message,
    { setSubmitting, resetForm }: FormikHelpers<Message>
  ): Promise<void> => {
    try {
      await messageApi.postMessage(values);
      resetForm();
      // Do something with the createdMessage if needed
      setErrorMsg(null);
    } catch (error) {
      console.error('Error creating message:', error);
      setErrorMsg('Error creating message');
      // Handle error and update state
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    senderEmail: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    subject: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={blankMessage}
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
        <FormControl isRequired pb="5">
          <FormLabel>Email</FormLabel>
          <ErrorMessage name="senderEmail" component={NestedFormErrorMessage} />
          <Field
            as={Input}
            name="senderEmail"
            type="email"
            placeholder="name@email.com"
          />
        </FormControl>
        <FormControl pb="5">
          <FormLabel>Subject</FormLabel>
          <ErrorMessage name="subject" component={NestedFormErrorMessage} />
          <Field as={Input} name="subject" placeholder="Subject" />
        </FormControl>
        <FormControl>
          <ErrorMessage name="body" component={NestedFormErrorMessage} />
          <ErrorMessage name="subject" component={NestedFormErrorMessage} />
          <FormLabel>Body</FormLabel>
          <Field
            as={Textarea}
            name="body"
            placeholder="Let us know how we can help you."
            size="sm"
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
