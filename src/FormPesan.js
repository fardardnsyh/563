// src/FormPesan.js
import React, { useState } from 'react';

const FormPesan = ({ onSubmit }) => {
  const [pesan, setPesan] = useState('');
  const [nama, setNama] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama: nama || 'Anonim', pesan });
    setPesan('');
    setNama('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Isikan Nama Kamu disini (jika ingin)</h1>
      <input
        type="text"
        placeholder="Nama (opsional)"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <textarea
        placeholder="Tuliskan pesan kamu disini..."
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
        required
      />
      <button type="submit">Kirim Pesan</button>
    </form>
  );
};

export default FormPesan;
