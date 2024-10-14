// src/firestoreService.js

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const sendMessage = async (message, name) => {
  try {
    await addDoc(collection(db, "messages"), {
      text: message,
      name: name || "Anonim",
      createdAt: new Date(),
    });
    console.log("Pesan berhasil dikirim!");
  } catch (error) {
    console.error("Error saat menambahkan dokumen: ", error);
  }
};

export { sendMessage };