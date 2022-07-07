// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getstorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBPf5-YNDW0VvKO6EXkznBYIpz-OupYL9E",
  authDomain: "mint-io-8c802.firebaseapp.com",
  projectId: "mint-io-8c802",
  storageBucket: "mint-io-8c802.appspot.com",
  messagingSenderId: "83925642681",
  appId: "1:83925642681:web:f7877f9583ed204b1e5a68",
  measurementId: "G-KMTRP0F1ET"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// export const storage = getstorage(app);
// export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const db = firebaseApp.firestore();
