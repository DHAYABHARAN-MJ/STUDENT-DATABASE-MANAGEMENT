import React from "react";
import googleimg from '../assets/images/google.png'
import bitsathyimg from '../assets/images/Bannari_Amman_Institute_of_Technology_logo.png'
import '../Login/Login.css'

return(
    <div className="container">
        <div class="wb">
        <center><span id="w">Welcome Back!</span></center>
        </div>
        <div class="login-container">
        <div class="google-signin-container">
            <div class="bitsathyimg">
                <img src={bitsathyimg} alt=""/>
            </div>
            <p class="signin-instruction">Sign in with your <span><b>Bitsathy Gmail</b></span></p>
            <div class="gb" onclick="handleSignInClick()">
                <img src={googleimg} width={25} height={25}/>
                <div class="sigin">Sign in</div>
                {/* <!-- <center><div class="g-signin2" id="googleSignInBtn"></div></center> --> */}
            </div>
        </div>
        </div>
    </div>
)
export default Login