import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import { useContext } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyAY7vNG_XUGeBerqhVyBeQjHT0oMmce3qA',
  authDomain: 'top15-redditclone.firebaseapp.com',
  projectId: 'top15-redditclone',
  storageBucket: 'top15-redditclone.appspot.com',
  messagingSenderId: '1038854532334',
  appId: '1:1038854532334:web:55a33d5715c18681f957ff',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// AUTHENTICATION
// Google Auth
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(firestore, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(firestore, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  console.log('Logged in!');
};
const logout = () => {
  signOut(auth);
  console.log('Logged out!');
};

export { logout, auth, firestore, signInWithGoogle };
