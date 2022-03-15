//import firebase from "firebase"; 
import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail,signOut,OAuthProvider,FacebookAuthProvider,TwitterAuthProvider } from "firebase/auth";
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore"; 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEpOKpocAs4HyyBMB1hgD3fQ8iVHSYJoo",
    authDomain: "clone-459ef.firebaseapp.com",
    projectId: "clone-459ef",
    storageBucket: "clone-459ef.appspot.com",
    messagingSenderId: "1036770956894",
    appId: "1:1036770956894:web:aec8e2ed33bc9c3e9ac6cf",
    measurementId: "G-6FE4R8KSYG"
  };


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const facebookProvider = new FacebookAuthProvider();
  const signInWithFacebook = async () => {
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "facebook",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const appleProvider = new OAuthProvider();
  const signInWithApple = async () => {
    try {
      const res = await signInWithPopup(auth, appleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "apple.com",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const twitterProvider = new TwitterAuthProvider();
  const signInWithTwitter = async () => {
    try {
      const res = await signInWithPopup(auth, twitterProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "apple.com",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

  };
  
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const logout = () => {
    signOut(auth);
  };
  
  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    signInWithFacebook,
    signInWithApple,
    signInWithTwitter,
  };