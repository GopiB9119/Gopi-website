import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3zH1PReEVOW0o3_M8vMiOpRi4npdmx5M",
  authDomain: "story-93958.firebaseapp.com",
  projectId: "story-93958",
  storageBucket: "story-93958.appspot.com",
  messagingSenderId: "785822117400",
  appId: "1:785822117400:web:de48e344db36bc40951d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app; 