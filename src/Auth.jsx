import React, { useState } from "react";
import './Auth.css'

export default function Auth() {
    
    function switchSide(){
        let main = document.querySelector('.main');
        let slider = document.querySelector('.slider');
        let login = document.querySelector('#logIn');
        let sign = document.querySelector('#signIn');

        main.classList.toggle('active');
        slider.classList.toggle('active');
        login.classList.toggle('active') 
        sign.classList.toggle('active')
    }

    return(
        <div className="main ">
            <div className="auth">
                <div className="slider "></div>
                <div className="sign-log active" id="signIn">
                    <h1 className="authHead">Create an account</h1>
                    
                    <form action="submit" className="dataForm">
                        <p>Enter your credentials to create to your account ...</p>
                        <label htmlFor="username">Username :</label>
                        <input className="logTxt" type="text" name="username" id="username" placeholder="User023"/>
                        
                        <label htmlFor="email">Email :</label>
                        <input className="logTxt" type="email" name="email" id="email" placeholder="email@web.com"/>

                        <label htmlFor="password">Password :</label>
                        <input className="logTxt" type="password" name="password" id="password" placeholder="password"/>

                        <input type="submit" value="Sign up" className="submitBtn" id="submitBtnLogIn"/>
                    </form>
                    
                    <div className="sides">
                        <p className="msgLog">Already have an account ?</p>
                        <div className="sidBtn" onClick={switchSide}>Login</div>
                    </div>
                </div>
                <div className="sign-log" id="logIn">
                    <h1 className="authHead">Welcome back :)</h1>
                    
                    <form action="submit" className="dataForm">
                        <p>Enter your credentials to login to your account ...</p>
                        <label htmlFor="email">Email :</label>
                        <input className="logTxt" type="email" name="email" id="email" placeholder="email@web.com"/>

                        <label htmlFor="password">Password :</label>
                        <input className="logTxt" type="password" name="password" id="password" placeholder="password"/>

                        <p id="forget">Forget password ?</p>
                        <input type="submit" value="Login" className="submitBtn" id="submitBtnLogIn"/>
                    </form>
                    
                    <div className="sides">
                        <p className="msgLog">Don't have an account ?</p>
                        <div className="sidBtn" onClick={switchSide}>Sign up</div>
                    </div>
                </div>
            </div>
        </div>
    )
}