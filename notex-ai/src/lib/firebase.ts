// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "notex-ai.firebaseapp.com",
  projectId: "notex-ai",
  storageBucket: "notex-ai.appspot.com",
  messagingSenderId: "836935173627",
  appId: "1:836935173627:web:34a1bd2f3cea46b188775e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app) //used to interact with our files and upload it to Firebase

export async function uploadFileToFireBase(image_url:string, name:string){
    try {
        const res = await fetch(image_url)
        const buffer = await res.arrayBuffer();
        const file_name = name.replace(' ','')+Date.now+'.jpeg'
        const storageRef = ref(storage,file_name);

        await uploadBytes(storageRef,buffer,{
            contentType: 'image/jpeg'
        })
        const firebase_url = await getDownloadURL(storageRef)
        return firebase_url
    } catch (error) {
        console.log(error)
    }

}


