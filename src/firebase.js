import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAatTjrl6rhlQ_KFQD8u_t6NjpRmfeu4Og",
  authDomain: "chats-f78d6.firebaseapp.com",
  databaseURL: "https://chats-f78d6.firebaseio.com",
  projectId: "chats-f78d6",
  storageBucket: "chats-f78d6.appspot.com",
  messagingSenderId: "267698251558",
  appId: "1:267698251558:web:8c2848d0a7ae585c6e43e7"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;