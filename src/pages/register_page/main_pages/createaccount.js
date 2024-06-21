import React, { useContext } from "react";
import { ToggleRegister } from "../../contextpage";

const CreateAccountPage = () => {
  const {setRegister, setPresentRegister} = useContext(ToggleRegister)

  return (
    <>
      <section className="registerSection">
        <main className="mainRegister">
          <span className="cancelBtn" onClick={() => setRegister(false)}><i class="fa-solid fa-xmark"></i></span>
          <div className="registerDiv">
            <h1 className="registerHead">Create Account</h1>
            <form id="registerForm">
              <input type="text" className="registerInput" placeholder="User Name" required />
              <input type="text" className="registerInput" placeholder="Email" required />
              <button type="submit" className="registerBtn">REGISTER</button>
              <p onClick={() => setPresentRegister("LOGIN")} className="registerNavText">ALREADY HAS AN ACCOUNT</p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

export default CreateAccountPage;