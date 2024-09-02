// Login.jsx
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import googleimg from '../assets/images/google.png';
import bitsathyimg from '../assets/images/Bannari_Amman_Institute_of_Technology_logo.png';
import '../Login/Login.css';

const CLIENT_ID = '158651131098-2607903rinkb0ubd39nslv4264of44rl.apps.googleusercontent.com';

const Login = () => {

  const onSignInSuccess = (credentialResponse) => {
    console.log('ID Token:', credentialResponse.credential);
    window.location.href = '/dashboard.html';
  };

  const onSignInFailure = (error) => {
    console.error('Google Sign-In failed:', error);
    alert('Sign-In failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="container">
        <div className="wb">
          <center><span id="w">Welcome Back!</span></center>
        </div>
        <div className="login-container">
          <div className="google-signin-container">
            <div className="bitsathyimg">
              <img src={bitsathyimg} alt="Bitsathy Logo" />
            </div>
            <p className="signin-instruction">
              Sign in with your <span><b>Bitsathy Gmail</b></span>
            </p>
            <div className="gb">
              <GoogleLogin
                onSuccess={onSignInSuccess}
                onError={onSignInFailure}
              />
              <img src={googleimg} width={25} height={25} alt="Google Logo"/>
              <div className="signin">Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;