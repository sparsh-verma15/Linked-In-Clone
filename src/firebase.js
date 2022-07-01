// Import the functions you need from the SDKs you need
import firebase from 'firebase';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuS5D169jFrEhgTin45QMvy7l8Qyj3tBc",
    authDomain: "linked-in-clone-b068c.firebaseapp.com",
    projectId: "linked-in-clone-b068c",
    storageBucket: "linked-in-clone-b068c.appspot.com",
    messagingSenderId: "581648704807",
    appId: "1:581648704807:web:860999f7aa40ffa2adf502",
    measurementId: "G-QX03E1TGFN"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider,storage};
export default db;