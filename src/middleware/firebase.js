import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBCtXr-M8tUljATouv8xUf67cvTm_VqG28",
    authDomain: "kanuckfreelancing.firebaseapp.com",
    projectId: "kanuckfreelancing",
    storageBucket: "kanuckfreelancing.appspot.com",
    messagingSenderId: "1062397002983",
    appId: "1:1062397002983:web:d3535f89bf5ef0b317ce42",
    measurementId: "G-6GKXSY30CV",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
