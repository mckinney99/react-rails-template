import React, { useEffect, useState } from 'react';
import messageApi, { Message } from '../apis/messageApi';

const ContactFormResults: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    handleGetMessages();
  }, []);

  const handleGetMessages = async () => {
    try {
      const msgs = await messageApi.getAllMessages();

      setMessages(msgs);
    } catch (error) {
      console.error('Error getting message:', error);
    }
  }; //

  return (
    <>
      {messages.map(({ subject, body, id }) => (
        <div key={id}>
          <h2>{subject}</h2>
          <div>{body}</div>
        </div>
      ))}
    </>
  );
};

export default ContactFormResults;
