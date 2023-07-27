import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByvKaR7ygpSDZbvfGN5MJUfh_nV46zD-Y",
  authDomain: "pet-galaxy-ricardo-da-silva.firebaseapp.com",
  projectId: "pet-galaxy-ricardo-da-silva",
  storageBucket: "pet-galaxy-ricardo-da-silva.appspot.com",
  messagingSenderId: "750402716209",
  appId: "1:750402716209:web:354a5069b317e1a015cb10",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
