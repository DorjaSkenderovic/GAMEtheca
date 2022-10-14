import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFrXEoqGSA9JYl--hfOPoKTSAwQla1CZQ",
    authDomain: "gametheca-58f06.firebaseapp.com",
    projectId: "gametheca-58f06",
    storageBucket: "gametheca-58f06.appspot.com",
    messagingSenderId: "613809090983",
    appId: "1:613809090983:web:ac318431f63abaa2dc4682",
    measurementId: "G-W24JY3SHGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db }