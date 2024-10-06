import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhArYqcMeZxGBBhojNccwFJ35EF1j-JhE",
    authDomain: "vuejs-todo-1a0a8.firebaseapp.com",
    projectId: "vuejs-todo-1a0a8",
    storageBucket: "vuejs-todo-1a0a8.appspot.com",
    messagingSenderId: "417765784964",
    appId: "1:417765784964:web:06779cad6471d8870c31d1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);