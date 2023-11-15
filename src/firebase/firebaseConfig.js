import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAfxYmh1CIuDHFy30P04wSOslVmq8mVRMw",
  authDomain: "test-unsplash-project-95ac8.firebaseapp.com",
  projectId: "test-unsplash-project-95ac8",
  storageBucket: "test-unsplash-project-95ac8.appspot.com",
  messagingSenderId: "920306435829",
  appId: "1:920306435829:web:332e6125f6597f038127bc",
  measurementId: "G-VNM8WNK10M",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signUpLogin = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => result)
    .catch((error) => error);
};
