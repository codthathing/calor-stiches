import React, {useContext} from "react";
import { ToggleRegister } from "../home";

const RegisterPage = () => {
  const {setRegister} = useContext(ToggleRegister);
  return (
    <>
      <section id="RegisterSection">
        <main id="mainRegister">
          <span onClick={() => setRegister(false)}>back</span>
        </main>
      </section>
    </>
  );
}

export default RegisterPage;