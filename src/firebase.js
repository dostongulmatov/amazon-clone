import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKWtFVRdm9ugbZBu4EJbyWVJlz6jIWXAE",
  authDomain: "clone-45607.firebaseapp.com",
  databaseURL: "https://clone-45607.firebaseio.com",
  projectId: "clone-45607",
  storageBucket: "clone-45607.appspot.com",
  messagingSenderId: "654896151264",
  appId: "1:654896151264:web:36dc2791972e3f820fae85",
  measurementId: "G-M4PG0NLKJ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };