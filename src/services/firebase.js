import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAckgo1_K1xFYZ--q2XgZm71RJXiFfn67I",
  authDomain: "email-manager-e94e8.firebaseapp.com",
  projectId: "email-manager-e94e8",
  storageBucket: "email-manager-e94e8.appspot.com",
  messagingSenderId: "136501532924",
  appId: "1:136501532924:web:0aab24187fcaeb32e25f79"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth };