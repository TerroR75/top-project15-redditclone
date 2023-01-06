import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

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
export const firestore = getFirestore(app);
