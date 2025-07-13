// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAY5QJihJRqbIF9Qnh0GRHSJOJG0umjJWQ',
  authDomain: 'staff-off.firebaseapp.com',
  projectId: 'staff-off',
  storageBucket: 'staff-off.firebasestorage.app',
  messagingSenderId: '389689819444',
  appId: '1:389689819444:web:ab5239402b2e560c16a561',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
