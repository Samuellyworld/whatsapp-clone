import firebase from 'firebase/app';
import 'firebase/auth';

interface firebaseTypes {
    apiKey : string,
    authDomain : string,
    projectId : string,
    storageBucket : string,
    messagingSenderId : string,
    appId : string,
    measurementId : string
}
const firebaseConfig : firebaseTypes = {
  apiKey : "AIzaSyChRz7y3VxzUe00UFRySyMLE606kdxJoMU",
  authDomain: "whatsapp-clone-7374f.firebaseapp.com",
  projectId: "whatsapp-clone-7374f",
  storageBucket: "whatsapp-clone-7374f.appspot.com",
  messagingSenderId: "636094069910",
  appId: "1:636094069910:web:a5e7382996ac3b9d6a96b7",
  measurementId: "G-G6N8M0ZBE5"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()
 provider.setCustomParameters({ prompt : 'select_account'});

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;