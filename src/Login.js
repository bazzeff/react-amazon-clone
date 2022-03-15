import React, { useEffect, useState } from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle,  
    signInWithFacebook,
    signInWithApple,
    signInWithTwitter, } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    //const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

    return (
        <div className='login'>

            <div className='login__container'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                  
                <input
          type="text"
          className="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
         <h5>Password</h5>
        <input
          type="password"
          className="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
                </form>
        <button
          className="login__signInButton"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>

        <button
          className="login__btn login__facebook"
          onClick={signInWithFacebook}
        >
          Register with Facebook
        </button> 

        <button
          className="login__btn login__apple"
          onClick={signInWithApple}
        >
          Register with Apple
        </button> 

        <button
          className="login__btn login__twitter"
          onClick={signInWithTwitter}
        >
          Register with Twitter
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
            </div>
        </div>
    )
}

export default Login