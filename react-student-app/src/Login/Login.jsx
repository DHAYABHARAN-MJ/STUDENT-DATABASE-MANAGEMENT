import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import bitsathyimg from '../assets/images/Bannari_Amman_Institute_of_Technology_logo.png';
import '../Login/Login.css';
const CLIENT_ID = '238970835426-f88bu0tpphgd6cc8rkfrq70sdea6qcb7.apps.googleusercontent.com';
const auth_domain='@bitsathy.ac.in'
const Login = () => {
  const parseJwt = (token) => {
    if (!token) return null;
    
    try {
      const [header, payload, signature] = token.split('.');
      
      if (!payload) return null;
  
      // Decode Base64 URL encoded payload
      const base64Url = payload.replace(/-/g, '+').replace(/_/g, '/');
      const base64 = window.atob(base64Url);
  
      // Decode UTF-8 string
      const jsonPayload = decodeURIComponent(
        Array.prototype.map.call(base64, (c) =>
          '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join('')
      );
  
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Failed to parse JWT:', error);
      return null;
    }
  };
  const history=useNavigate();
  const onsign=()=>
    {
      history('/Dashboard');
    }

    const login = useGoogleLogin({
      onSuccess: (credentialResponse) => {
        const {credential}=credentialResponse;
        const userInfo=parseJwt(credential);
        // onsign();
        console.log(userInfo.email);
        // if(userInfo && userInfo.email.endswith(`@${auth_domain}`))
        //   {
        //     console.log(userInfo.email);
        //   onsign();
        //   }
        //   else{
        //     alert("Only Bitsathy Mail Id Is Allowed");
        //   }
      },
      onError: (error) => {
        console.error('Google Sign-In failed:', error);
        alert('Sign-In failed. Please try again.');
      },
    });




  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="container h-screen w-screen">
        <div className="wb">
          <center><span id="w">Welcome Back!</span></center>
        </div>
        <div className="login-container">
          <div className="google-signin-container">
            <div className="bitsathyimg">
              <img src={bitsathyimg} alt="Bitsathy Logo" />
            </div>
            <p className='siginbit' >
              Sign in with your <span><b>Bitsathy Gmail</b></span>
            </p>
            <div className="gb" onClick={onsign}>
              {/* <img src={googleimg} width={25} height={25} alt="Google Logo"/> */}
              <div className="signin">Google Sign In</div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

