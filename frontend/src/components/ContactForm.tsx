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
import React, { useState } from 'react';
import messageApi, { Message } from '../apis/messageApi';

const blankMessage = {
  id: 0,
  datetime: new Date(),
  senderEmail: '',
  subject: '',
  body: '',
};

const ContactForm: React.FC = () => {
  const [newMessage, setNewMessage] = useState<Message>(blankMessage);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handlePostMessage = async () => {
    try {
      const createdMessage = await messageApi.postMessage(newMessage);

      setNewMessage(blankMessage);
      // Do something with the createdMessage if needed
    } catch (error) {
      console.error('Error creating message:', error);
      setErrorMsg('Error creating message. Please try again.');
    }
  };

  return (
    <>
      <FormControl isRequired pb="5">
        {errorMsg ? (
          <Alert test-id="error-container" status="error">
            <AlertIcon />
            {errorMsg}
          </Alert>
        ) : null}
        <FormLabel>Email</FormLabel>
        <Input
          required
          placeholder="name@email.com"
          type="email"
          value={newMessage.senderEmail}
          onChange={(e) =>
            setNewMessage({ ...newMessage, senderEmail: e.target.value })
          }
        />
      </FormControl>
      <FormControl pb="5">
        <FormLabel>Subject</FormLabel>
        <Input
          required
          placeholder="Subject"
          value={newMessage.subject}
          onChange={(e) =>
            setNewMessage({ ...newMessage, subject: e.target.value })
          }
        />
      </FormControl>
      <Textarea
        required
        mb="5"
        value={newMessage.body}
        onChange={(e) => setNewMessage({ ...newMessage, body: e.target.value })}
        placeholder="Let us know how we can help you."
        size="sm"
      />
      <Button onClick={handlePostMessage}>Submit</Button>
    </>
  );
};

export default ContactForm;
