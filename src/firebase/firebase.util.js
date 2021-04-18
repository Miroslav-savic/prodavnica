import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCzGfjsSGNwu9DWV7zxk0vmljigqwNlOug",
    authDomain: "prodavnica-3aac9.firebaseapp.com",
    projectId: "prodavnica-3aac9",
    storageBucket: "prodavnica-3aac9.appspot.com",
    messagingSenderId: "395056153051",
    appId: "1:395056153051:web:c93199003b86363ef4e7fe"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:  'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;