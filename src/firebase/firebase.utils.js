import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKQYL07AW5r-qJn-qnGSAMzKR2gJmOOrE",
    authDomain: "cloth-db-a8985.firebaseapp.com",
    databaseURL: "https://cloth-db-a8985.firebaseio.com",
    projectId: "cloth-db-a8985",
    storageBucket: "cloth-db-a8985.appspot.com",
    messagingSenderId: "237906954588",
    appId: "1:237906954588:web:61aa73c85c3c6c10835999"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShotUser = userRef.get();

  if (!snapShotUser.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;