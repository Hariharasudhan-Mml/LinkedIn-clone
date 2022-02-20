

import { initializeApp ,getApps,getApp} from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,serverTimestamp} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7Iiz0rAfKYDqygc5M9BSNFfiK84u7DHQ",
  authDomain: "linkedin-clone-cfdc6.firebaseapp.com",
  projectId: "linkedin-clone-cfdc6",
  storageBucket: "linkedin-clone-cfdc6.appspot.com",
  messagingSenderId: "379989474127",
  appId: "1:379989474127:web:a30c667b37e1cd076f233a"
};

const app = !getApps().length > 0 ? initializeApp(firebaseConfig) : getApp();
const  auth=getAuth();
const db=getFirestore();
const storage=getStorage();
const provider=new GoogleAuthProvider();
const timestamp=serverTimestamp()


export {app,auth,db,provider,timestamp,storage};