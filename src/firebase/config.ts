import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_PE3oP83Az34nXJ3jxl8iRAZaj4DpCYA",
  authDomain: "croprrr-ee156.firebaseapp.com",
  projectId: "croprrr-ee156",
  storageBucket: "croprrr-ee156.appspot.com",
  messagingSenderId: "238998301522",
  appId: "1:238998301522:web:07fa70a690787307e7e88b"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const projectFirestore = firebase.firestore();


export { projectFirestore }
