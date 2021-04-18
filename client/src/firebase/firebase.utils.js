import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDT5LG2vk7wX5x59OALVooiFOmZuRfrTa4",
    authDomain: "store-db-e4af1.firebaseapp.com",
    databaseURL: "https://store-db-e4af1.firebaseio.com",
    projectId: "store-db-e4af1",
    storageBucket: "store-db-e4af1.appspot.com",
    messagingSenderId: "1074446279314",
    appId: "1:1074446279314:web:86b0ecdb4296fc9ddb3c4b",
    measurementId: "G-9HKEPPL6SD"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();

  console.log(collectionSnapshot)

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
     await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
     }) 
    } catch (error) {
      console.log('error creating user', error)
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  console.log(batch)
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc;
  }, {})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;