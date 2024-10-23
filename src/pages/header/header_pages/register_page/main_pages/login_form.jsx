import { useContext, useState } from "react";
import { useFocus } from "../usefocus";
import { ToggleRegister } from "../../../../contextpage";
import RegisterInput from "../register_input";
import RegisterPassword from "../register_password";
import RegisterButton from "../register_button";

const LoginForm = ({ setText }) => {
  const { inputFocus } = useFocus();

  const { setPresentRegister } = useContext(ToggleRegister);
  const [loginValue, setLoginValue] = useState({ email: "", password: "" });

  const ChangeLoginValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const HandleLogin = (e) => {
    e.preventDefault();
    if (!loginValue.email) {
      setText("Enter your email");
    } else if (!loginValue.password) {
      setText("Enter your password");
    } else {
      setText("User cannot login");
    };
  };

  return (
    <form className="registerForm">
      <RegisterInput refFunction={inputFocus} type={"text"} name={"email"} value={loginValue.email} onChange={ChangeLoginValue} placeholder={"Email/User"} />
      <RegisterPassword name={"password"} value={loginValue.password} onChange={ChangeLoginValue} placeholder={"Password"} />
      <div id="registerParagraph">
        <input type="checkbox" id="registerCheck" /> Remember Me
        <span id="forgotBtn" onClick={() => setPresentRegister("FORGOTPASSWORD")}>FORGOT PASSWORD</span>
      </div>
      <RegisterButton buttonFunction={HandleLogin} buttonText={"LOGIN"} />
    </form>
  );
}

export default LoginForm;