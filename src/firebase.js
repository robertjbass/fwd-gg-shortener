import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCVYFYEdJgwBYDTlcjVAZZCM7pjb4KF06g',
  authDomain: 'fwd-gg.firebaseapp.com',
  projectId: 'fwd-gg',
  storageBucket: 'fwd-gg.appspot.com',
  messagingSenderId: '1042022333914',
  appId: '1:1042022333914:web:6457f4213b96c37b9954e3',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
