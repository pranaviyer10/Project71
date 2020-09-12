import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBiYP7kPs9L48ZTdyTFqbycPgUsHqbDwyM",
  authDomain: "storyhub-e7e68.firebaseapp.com",
  databaseURL: "https://storyhub-e7e68.firebaseio.com",
  projectId: "storyhub-e7e68",
  storageBucket: "storyhub-e7e68.appspot.com",
  messagingSenderId: "573766050422",
  appId: "1:573766050422:web:d8cf7e8fcca74d92cef557"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();