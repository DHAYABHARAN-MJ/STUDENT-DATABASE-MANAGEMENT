import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import bitsathyimg from '../assets/images/Bannari_Amman_Institute_of_Technology_logo.png';
import '../Login/Login.css';
const CLIENT_ID = '238970835426-f88bu0tpphgd6cc8rkfrq70sdea6qcb7.apps.googleusercontent.com';

const Login = () => {
  const history=useNavigate();
  const onsign=()=>
    {
      history('/Dashboard');
    }

    const login = useGoogleLogin({
      onSuccess: (credentialResponse) => {
        console.log('ID Token:', credentialResponse.credential);
        history('/Dashboard');
      },
      onError: (error) => {
        console.error('Google Sign-In failed:', error);
        alert('Sign-In failed. Please try again.');
      },
    });

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
            <div className="gb" onClick={login}>
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
// Login.jsx
// import React from 'react';
// import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import bitsathyimg from '../assets/images/Bannari_Amman_Institute_of_Technology_logo.png';
// import '../Login/Login.css';

// const CLIENT_ID = '238970835426-f88bu0tpphgd6cc8rkfrq70sdea6qcb7.apps.googleusercontent.com';

// const Login = () => {
//   const navigate = useNavigate();

//   const login = useGoogleLogin({
//     onSuccess: (credentialResponse) => {
//       console.log('ID Token:', credentialResponse.credential);
//       navigate('/Dashboard');
//     },
//     onError: (error) => {
//       console.error('Google Sign-In failed:', error);
//       alert('Sign-In failed. Please try again.');
//     },
//   });

//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <div className="container">
//         <div className="wb">
//           <center><span id="w">Welcome Back!</span></center>
//         </div>
//         <div className="login-container">
//           <div className="google-signin-container">
//             <div className="bitsathyimg">
//               <img src={bitsathyimg} alt="Bitsathy Logo" />
//             </div>
//             <p className="signin-instruction">
//               Sign in with your <span><b>Bitsathy Gmail</b></span>
//             </p>
//             <button className="custom-google-button" onClick={() => login()}>
//               <img src={bitsathyimg} alt="Google Logo" className="custom-google-icon" />
//               <span className="custom-google-text">Sign in with Google</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default Login;
