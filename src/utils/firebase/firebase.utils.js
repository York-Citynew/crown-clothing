//the app itself
import { initializeApp } from "firebase/app";
//getAuth: to get the auth token
//signinwith: different methods to sign in
//googleAuthProvider: ig the auth engine
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
//getFireStore: fireStore engine
//doc: doc agent
//get & set doc: manage the doc
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { types } from "sass";
// the config/key for firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXEzzTSU49vxHTFsgVrHg1CZMmWskAmI8",
  authDomain: "crown-clothing-1f8a8.firebaseapp.com",
  projectId: "crown-clothing-1f8a8",
  storageBucket: "crown-clothing-1f8a8.appspot.com",
  messagingSenderId: "740820177759",
  appId: "1:740820177759:web:dafdaf9aaae65b5d669cea",
};
// start the app
const app = initializeApp(firebaseConfig);
// start an authProvider
const provider = new GoogleAuthProvider();
// change the setting for authProvider
provider.setCustomParameters({
  prompt: "select_account",
});
// get the authToken
export const auth = getAuth();
// functions to run the authenticaiton
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// connect to db
export const db = getFirestore();

//in order to use it we need to create the method below

//we need a func so that we can store user's auth in firestore database

//userAuth is the object we receive from sign in(sign in with google popup)
export const createUserDocumentFromAuth = async (userAuth, extraInfo = "") => {
  if (!userAuth) return;
  //give us the document refrence inside the db as arg ,under users collectioin as arg with the specific id i gave u as arg

  //if theres no doc refrence in database, google will generate it for u anyway

  //first parameter: the database, 2nd: collection, 3rd: a unique id(the uid from auth obj)

  const userDocRef = doc(db, "users", userAuth.uid);

  //it will log an obj conatining a document refrence

  //in the obj theres a  path pointin at nowhere but a unique path that we can set our data there
  console.log(userDocRef);

  //to get the data in an specific document

  //it returns another obj
  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  //there is a method in userSnapShot obj that we can use
  //its clear that were gonna receive a false value cause theres no prev data stored
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName: (displayName ||= extraInfo),
        email,
        createdAt,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("email is already in use");
      } else {
        console.log("error creating the user", error.message);
      }
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;
  //what if i log it?????????????
  return createUserWithEmailAndPassword(auth, email, password);
};
