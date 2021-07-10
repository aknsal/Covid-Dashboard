import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5RcqMtQsOd-9lkxJfS12LZgoig6ig7zY",
  authDomain: "webd-selection.firebaseapp.com",
  projectId: "webd-selection",
  storageBucket: "webd-selection.appspot.com",
  messagingSenderId: "490737843943",
  appId: "1:490737843943:web:e12d92cb2097e52691ac42",
  measurementId: "G-TXP51R2KRM",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export { app };
export default firebase;
