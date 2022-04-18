// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsAh_ho6ft8Xxihi3ugD_LN1Zx_0ePRo",
  authDomain: "assignment-10-2483f.firebaseapp.com",
  projectId: "assignment-10-2483f",
  storageBucket: "assignment-10-2483f.appspot.com",
  messagingSenderId: "388403623596",
  appId: "1:388403623596:web:d3eb2552db3427bbaf9109"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;