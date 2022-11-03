import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { types } from "sass";
const firebaseConfig = {
  apiKey: "AIzaSyAXEzzTSU49vxHTFsgVrHg1CZMmWskAmI8",
  authDomain: "crown-clothing-1f8a8.firebaseapp.com",
  projectId: "crown-clothing-1f8a8",
  storageBucket: "crown-clothing-1f8a8.appspot.com",
  messagingSenderId: "740820177759",
  appId: "1:740820177759:web:dafdaf9aaae65b5d669cea",
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, extraInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName: displayName ? displayName : extraInfo,
        email,
        createdAt,
      });
    } catch (error) {
      switch (error) {
        case "auth/wrong-password":
          console.log("password is wrong");
          break;
        case "auth/user-not-found":
          console.log("email not found");
          break;
        default:
          console.log(error);
          break;
      }
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
