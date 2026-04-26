import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzu75F4DPh64aoFdFLyRku1GB8cfPII0",
  authDomain: "crwn-clothing-db-f7499.firebaseapp.com",
  projectId: "crwn-clothing-db-f7499",
  storageBucket: "crwn-clothing-db-f7499.firebasestorage.app",
  messagingSenderId: "532928963477",
  appId: "1:532928963477:web:0ab26d529c52f22204cc9c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);