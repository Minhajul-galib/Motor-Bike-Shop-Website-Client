import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const initializeFireBase = () =>{
    initializeApp(firebaseConfig);
}

export default initializeFireBase;