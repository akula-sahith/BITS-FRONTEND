// Import the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ⚠️ Replace these values with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAfseQrF1l2Yu1Ix2f-6fZJJcLPbDCeBbA",
  authDomain: "bits-hyd.firebaseapp.com",
  projectId: "bits-hyd",
  storageBucket: "bits-hyd.firebasestorage.app",
  messagingSenderId: "152226328393",
  appId: "1:152226328393:web:8360b324637131db2ab498",
  measurementId: "G-2MLBWXCXV5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase Authentication
export const auth = getAuth(app);
export default app;
