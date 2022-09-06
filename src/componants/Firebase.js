import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBA-Hy4YbhxNTJN85L0rzZ7kwPDFRABqQQ",
  authDomain: "ibtihelbs.firebaseapp.com",
  projectId: "ibtihelbs",
  storageBucket: "ibtihelbs.appspot.com",
  messagingSenderId: "1050652944918",
  appId: "1:1050652944918:web:9af54ad48008181f7aa337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { db };

/**const firebaseConfig = {
  apiKey: "AIzaSyByaH8-HLtk048rKtuxvTZA01vT5dkDGuw",
  authDomain: "reactportfolio-70aef.firebaseapp.com",
  projectId: "reactportfolio-70aef",
  storageBucket: "reactportfolio-70aef.appspot.com",
  messagingSenderId: "287064728989",
  appId: "1:287064728989:web:d6bb360956ffbd5228bb74"
}; */