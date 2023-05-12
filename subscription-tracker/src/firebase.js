import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmkJhY0X5QTBodkZo3kdQ6lAqwqNCzXzo",
  authDomain: "subscription-tracker-6c16f.firebaseapp.com",
  projectId: "subscription-tracker-6c16f",
  storageBucket: "subscription-tracker-6c16f.appspot.com",
  messagingSenderId: "648934895558",
  appId: "1:648934895558:web:a674b78a8239bb72600cc7"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}