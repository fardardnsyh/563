// src/App.js

import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const App = () => {
  return (
    <div>
      <h1>Pesan Anonim</h1>
      <MessageForm />
      <MessageList />
    </div>
  );
};

export default App;