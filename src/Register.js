import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  db,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithApple,
  signInWithTwitter,
} from "./firebase";
import { collection, addDoc} from "firebase/firestore"; 
import "./Register.css";

function Register() {
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    if(password !== confirmPassword){
      alert("Passwords don't match")
      return;
  }
    registerWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
     // Signed in
      setHasAccount(true) 
      const user = userCredential.user; 
      const docRef = addDoc(collection(db, "users"), {
        owner_uid: user.uid,
        displayName: name,
        email: user.email,
      }); 

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    // ...
    })
    .catch((error) => {
      setHasAccount(false)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);


  return (
    <div className="register">
    
      <div className="register__container">
      <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
      </Link>
      <form>
        <input
          type="text"
          className="register__textBox"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="register__textBox"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => confirmPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        </form>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>

        <button
          className="register__btn register__google"
          onClick={signInWithFacebook}
        >
          Register with Facebook
        </button> 

        <button
          className="register__btn register__apple"
          onClick={signInWithApple}
        >
          Register with Apple
        </button> 

        <button
          className="register__btn register__google"
          onClick={signInWithTwitter}
        >
          Register with Twitter
        </button>

        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Register;