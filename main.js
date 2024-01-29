import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8g6kCR8laDnH1YCF9cYVy10lF1y7s2i0",
  authDomain: "bakwan-jagung.firebaseapp.com",
  projectId: "bakwan-jagung",
  storageBucket: "bakwan-jagung.appspot.com",
  messagingSenderId: "710653450064",
  appId: "1:710653450064:web:5cbf9ff4240922b03ffe55",
  measurementId: "G-VBHD7G08PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDataSiswa() {
  const siswaRef = collection(db, "siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);

  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });

  return retval;
}