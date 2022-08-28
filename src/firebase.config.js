
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBnVrSC892chmo4aLxPg8pl5WiTsLzvD98",
    authDomain: "reddit-clone-1dfe3.firebaseapp.com",
    projectId: "reddit-clone-1dfe3",
    storageBucket: "reddit-clone-1dfe3.appspot.com",
    messagingSenderId: "898999598528",
    appId: "1:898999598528:web:657f82529a82d6b4511c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db