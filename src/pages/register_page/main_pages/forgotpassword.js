import React, { useContext, useRef, useEffect } from "react";
import { ToggleRegister } from "../../contextpage";

const ForgotPasswordPage = () => {
  const {setRegister, setPresentRegister} = useContext(ToggleRegister)
  const inputFocus = useRef("")
  useEffect(()=>{
    inputFocus.current.focus()
  },[setPresentRegister])

  return (
    <>
      <section className="registerSection navSections">
        <main className="mainRegister mainNav">
          <span className="cancelBtn" onClick={() => setRegister(false)}><i class="fa-solid fa-xmark"></i></span>
          <div className="registerDiv">
            <h1 className="registerHead">Forgotten Password?</h1>
            <form id="registerForm">
              <input type="text" ref={inputFocus} className="registerInput" placeholder="Username or Email Address" required />
              <button type="submit" className="registerBtn">GET NEW PASSWORD</button>
              <p onClick={() => setPresentRegister("LOGIN")} className="registerNavText">ALREADY HAS AN ACCOUNT</p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

export default ForgotPasswordPage;