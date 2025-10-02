import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ3TFDYjbTwxo5OI_rMpwhcOjO9jUxn3s",
  authDomain: "resume-score-ai-4cef4.firebaseapp.com",
  projectId: "resume-score-ai-4cef4",
  storageBucket: "resume-score-ai-4cef4.firebasestorage.app",
  messagingSenderId: "605344879793",
  appId: "1:605344879793:web:a12a09798e0c553ae43e90",
  measurementId: "G-ECVGYSKPY0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };