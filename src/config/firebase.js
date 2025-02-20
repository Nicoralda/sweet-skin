import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiPU7Ia0t3Usvm3blvEsMXBT47dV5iy5A",
    authDomain: "sweetskin-ecommerce.firebaseapp.com",
    projectId: "sweetskin-ecommerce",
    storageBucket: "sweetskin-ecommerce.firebasestorage.app",
    messagingSenderId: "99995940819",
    appId: "1:99995940819:web:4cf009ef51c2aebd242126"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);