import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const SimpleChatbot = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const steps = [
    {id: '0',
    message: 'Hi',
    trigger: '1',

    },
    {
      id: '1',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      validator: (value) => {
        if (!value || value.trim() === '') {
          return 'Please enter your name';
        }
        setName(value);
        return true;
      },
      trigger: '2',
    },
    {
      id: '2',
      message: 'What is your email address?',
      trigger: 'email',
    },
    {
      id: 'email',
      user: true,
      validator: (value) => {
        const valid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!valid.test(value)) {
          return 'Please enter a valid email address';
        }
        setEmail(value);
        return true;
      },
      trigger: '3',
    },
    {
      id: '3',
      message: 'What is your phone number?',
      trigger: 'phone',
    },
    {
      id: 'phone',
      user: true,
      validator: (value) => {
        const valid = /^[0-9]{10}$/;
        if (!valid.test(value)) {
          return 'Please enter a valid 10-digit phone number';
        }
        setPhone(value);
        return true;
      },
      trigger: '4',
    },
    {
      id: '4',
      message: `Thank you for your information, ${name}! We'll connect with you soon.`,
      end: true,
    },
  ];

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#3f51b5',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#3f51b5',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="CHATBOT"
        speechSynthesis={{ enable: true, lang: 'en' }}
        floating={true}
        steps={steps}
        {...props}
      />
    </ThemeProvider>
  );
};

export default SimpleChatbot;