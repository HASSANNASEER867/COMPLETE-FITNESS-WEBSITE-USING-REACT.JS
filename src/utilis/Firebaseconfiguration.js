

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMMH4bLj4LF2gSBQEUkrF5NiYkUGPh0gI",
  authDomain: "fitness-legends-react.firebaseapp.com",
  projectId: "fitness-legends-react",
  storageBucket: "fitness-legends-react.appspot.com",
  messagingSenderId: "820918128912",
  appId: "1:820918128912:web:c144b7bc1df173c1ec1595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };

