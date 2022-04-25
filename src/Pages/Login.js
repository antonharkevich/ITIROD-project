import React, { useRef  } from "react";
import "./styles.css";
import { login, signUp} from "./firebase";



export default function Login(){
    const email = useRef(0);
    const password = useRef(0);
    const emailsign = useRef(0);
    const passwordsign = useRef(0);
    const name = useRef(0);
    const rateBullet = useRef(0);
    const rateBlitz = useRef(0);
    const rateRapid = useRef(0);
    const loginForm = useRef(0);
    const signin = useRef(0);
    function loginn(e) {
        e.preventDefault()
        login(email.current.value, password.current.value).then((res) => {
            console.log(res.user);
          })
          .catch((e) => {
            console.log(e.message)
        })
    }
    function signupp(e) {
        e.preventDefault()
        signUp(emailsign.current.value, passwordsign.current.value, name.current.value, rateBlitz.current.value, rateBullet.current.value, rateRapid.current.value).then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e.message)
        })
    }
    function signclick(e){
        loginForm.current.style.marginLeft = "-50%";
        signin.current.checked = true;
    }
    function loginclick(e){
        loginForm.current.style.marginLeft = "0%";
    }
      
    return(
        <>
                <div class="wrapper">
                <div class="title-text">
                    <h1 class="title login">
                    Login Form
                    </h1>
                    <h1 class="title signup">
                    Signup Form
                    </h1>
                </div>
                <div class="form-container">
                    <div class="slide-controls">
                    <input type="radio" name="slide" id="login" />
                    <input type="radio" name="slide" id="signup" ref={signin}/>
                    <label for="login" class="slide login" onClick={loginclick}>Login</label>
                    <label for="signup" class="slide signup" onClick={signclick}>Signup</label>
                    <div class="slider-tab"></div>
                    </div>
                    <div class="form-inner">
                    <form onSubmit={loginn} class="login" ref={loginForm}>
                        <div class="field">
                            <input type="text" ref={email} id="email" placeholder="Email Address" required/>
                        </div>
                        <div class="field">
                            <input type="password" ref={password} id="password" placeholder="Password" required/>
                        </div>
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Login"/>
                        </div>
                        <p class="signup-link">
                            Not a member? <a onClick={signclick}>Signup now</a>
                        </p>
                    </form>
                    <form onSubmit={signupp}class="signup">
                        <div class="field">
                            <input type="text" id="sign-email"  placeholder="Email Address" ref={emailsign} required/>
                        </div>
                        <div class="field">
                            <input type="password" id="sign-password" placeholder="Password" ref={passwordsign} required/>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Your name" ref={name} required/>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Fide rate blitz" ref={rateBlitz} required/>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Fide rate bullet" ref={rateBullet} required/>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Fide rate rapid" ref={rateRapid} required/>
                        </div>
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Signup"/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}