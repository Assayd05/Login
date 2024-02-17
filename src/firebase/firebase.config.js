import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBpLik0r2gmEigUhogqDNxqKt2hxt3ET-s",
  authDomain: "coffeeandcode-21e80.firebaseapp.com",
  projectId: "coffeeandcode-21e80",
  storageBucket: "coffeeandcode-21e80.appspot.com",
  messagingSenderId: "251784054669",
  appId: "1:251784054669:web:c27e00c11a4037cff65fc4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)