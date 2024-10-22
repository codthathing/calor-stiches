import RegisterButton from "../register_button";
import { ToggleRegister } from "../../../../contextpage";
import { useContext, useState } from "react";

const LoginForm = ({ setText }) => {
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
      <input
        type="text"
        name="email"
        value={loginValue.email}
        onChange={ChangeLoginValue}
        className="registerInput"
        placeholder="Email/User"
        required />
      <input
        type="password"
        name="password"
        value={loginValue.password}
        onChange={ChangeLoginValue}
        className="registerInput"
        placeholder="Password"
        required />
      <div id="registerParagraph">
        <input type="checkbox" id="registerCheck" /> Remember Me
        <span id="forgotBtn" onClick={() => setPresentRegister("FORGOTPASSWORD")}>FORGOT PASSWORD</span>
      </div>
      <RegisterButton buttonFunction={HandleLogin} buttonText={"LOGIN"} />
    </form>
  );
}

export default LoginForm;