import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyChRz7y3VxzUe00UFRySyMLE606kdxJoMU",
    authDomain: "whatsapp-clone-7374f.firebaseapp.com",
    projectId: "whatsapp-clone-7374f",
    storageBucket: "whatsapp-clone-7374f.appspot.com",
    messagingSenderId: "636094069910",
    appId: "1:636094069910:web:a5e7382996ac3b9d6a96b7",
    measurementId: "G-G6N8M0ZBE5"
  };

 firebase.initializeApp(firebaseConfig)
 export const firestore = firebase.firestore()
 export const auth = firebase.auth()

 export const provider = new firebase.auth.GoogleAuthProvider()