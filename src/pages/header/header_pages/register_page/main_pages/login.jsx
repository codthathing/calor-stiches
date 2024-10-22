import { useContext, useState } from "react";
import { ToggleRegister } from "../../../../contextpage";
import RegisterCancel from "../register_cancel";
import RegisterHead from "../register_head";
import RegisterMessage from "../register_message";
import LoginForm from "./login_form";
import RegisterNav from "../register_nav";


const LoginPage = () => {
  // const { setPresentRegister } = useContext(ToggleRegister);
  const [ infoText, setInfoText ] = useState("");
  // const [ loginValue, setLoginValue ] = useState({email: "", password: ""});

  // const ChangeLoginValue = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setLoginValue({...loginValue, [name]:value});
  // };

  // const HandleLogin = (e) => {
  //   e.preventDefault();
  //   if(!loginValue.email) {
  //     setInfoText("Enter your email");
  //   } else if (!loginValue.password) {
  //     setInfoText("Enter your password");
  //   } else {
  //     setInfoText("User cannot login");
  //   };
  // };

  return (
    <>
      <section className="registerSection navSections">
        <main className="mainRegister mainNav">
          <RegisterCancel />
          <div className="registerDiv">
            <RegisterHead headText={"Log in"} />
            <RegisterMessage text={infoText} showText={infoText}/>
            <LoginForm setText={setInfoText} />
            <RegisterNav nextRegister={"CREATEACCOUNT"} navText={"REGISTER"} />
          </div>
        </main>
      </section>
    </>
  );
}

export default LoginPage;