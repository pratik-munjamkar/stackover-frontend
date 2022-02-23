import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAUS_Kdo2AHmB6cRfdx7M1qY-CYR2xY7mY",
    authDomain: "stackover-flow-19d53.firebaseapp.com",
    projectId: "stackover-flow-19d53",
    storageBucket: "stackover-flow-19d53.appspot.com",
    messagingSenderId: "926031692534",
    appId: "1:926031692534:web:7c252cf7097b31ce8ee2d7",
    measurementId: "G-7X549T0MHM"
  };

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;