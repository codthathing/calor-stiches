import React, { useContext } from "react";
import { ToggleRegister } from "../../contextpage";


const LoginPage = () => {
  const { setRegister, setPresentRegister } = useContext(ToggleRegister);
  return (
    <>
      <section className="registerSection navSections">
        <main className="mainRegister mainNav">
          <span className="cancelBtn" onClick={() => setRegister(false)}><i className="fa-solid fa-xmark cancelIcon"></i></span>
          <div className="registerDiv">
            <h1 className="registerHead">Log in</h1>
            <form id="registerForm">
              <input type="text" className="registerInput" placeholder="Email/User" required />
              <input type="text" className="registerInput" placeholder="Password" required />
              <p id="registerParagraph">
                <input type="checkbox" id="registerCheck" /> Remember Me 
                <span id="forgotBtn" onClick={() => setPresentRegister("FORGOTPASSWORD")}>FORGOT PASSWORD</span>
              </p>
              <button type="submit" className="navBtn registerBtn">LOGIN</button>
              <p onClick={() => setPresentRegister("CREATEACCOUNT")} className="registerNavText">REGISTER</p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

export default LoginPage;