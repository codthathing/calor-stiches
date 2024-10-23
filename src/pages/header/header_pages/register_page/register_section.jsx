import { useState } from "react";
import RegisterCancel from "./register_cancel";
import RegisterHead from "./register_head";
import RegisterMessage from "./register_message";
import RegisterNav from "./register_nav";

const RegisterSection = ({headText, RegisterForm, nextRegister, navText}) => {
  const [ infoText, setInfoText ] = useState("");

  return (
    <section className="registerSection navSections">
      <main className="mainRegister mainNav">
        <RegisterCancel />
        <div className="registerDiv">
          <RegisterHead headText={headText} />
          <RegisterMessage text={infoText} showText={infoText} />
          <RegisterForm setText={setInfoText} />
          <RegisterNav nextRegister={nextRegister} navText={navText} />
        </div>
      </main>
    </section>
  );
};

export default RegisterSection;