import { Textarea, Text, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import messageApi, { Message } from '../apis/messageApi';

const blankMessage = {
  id: 0,
  datetime: new Date(),
  senderEmail: '',
  subject: '',
  body: '',
}

const contactForm: React.FC = () => {
  const [newMessage, setNewMessage] = useState<Message>(blankMessage);

  const handlePostMessage = async () => {
    try {
      const createdMessage = await messageApi.postMessage(newMessage);
      setNewMessage(blankMessage);
      // Do something with the createdMessage if needed
    } catch (error) {
      console.error('Error creating message:', error);
      // Handle errors
    }
  };

  return (
    <>
      <FormControl isRequired pb="5">
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder='name@email.com' 
          value={newMessage.senderEmail}
          onChange={(e) => setNewMessage({ ...newMessage, senderEmail: e.target.value })}
        />
      </FormControl>
      <FormControl pb="5">
        <FormLabel>Subject</FormLabel>
        <Input 
          placeholder='Subject' 
          value={newMessage.subject}
          onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
        />
      </FormControl>
      <Textarea
        mb="5"
        value={newMessage.body}
        onChange={(e) => setNewMessage({ ...newMessage, body: e.target.value })}
        placeholder='Let us know how we can help you.'
        size='sm'
      />
      <Button onClick={handlePostMessage}>Submit</Button>
    </>
  )
}

export default contactForm;

