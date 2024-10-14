// src/MessageForm.js

import React, { useState } from 'react';
import { sendMessage } from './firestoreService';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessage(message, name);
      setMessage('');
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Isikan Nama Kamu di sini (Jika Ingin)</h1>
      <input 
        type="text" 
        placeholder="Nama (Opsional)" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea
        placeholder="Tuliskan pesan kamu di sini..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Kirim</button>
    </form>
  );
};

export default MessageForm;
