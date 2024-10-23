import { useState } from "react";
import { useFocus } from "../usefocus";
import RegisterInput from "../register_input";
import RegisterPassword from "../register_password";
import RegisterButton from "../register_button";

const ForgotpasswordForm = ({setText}) => {
  const { inputFocus } = useFocus();

  const [forgotPasswordValue, setForgotPasswordValue] = useState({email: "", new_password: "", confirm_password: ""});
  const ChangeForgotPasswordValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForgotPasswordValue({ ...forgotPasswordValue, [name]: value });
  };

  const HandleForgotPassword = (e) => {
    e.preventDefault();
    if(!forgotPasswordValue.email) {
      setText("Enter your email/username");
    } else if(!forgotPasswordValue.new_password) {
      setText("Enter new password");
    } else if(!forgotPasswordValue.confirm_password) {
      setText("Confirm password");
    } else if (forgotPasswordValue.new_password !== forgotPasswordValue.confirm_password) {
      setText("Password not matching");
    } else {
      setText("Unable to send email to user");
    };
  };


  return (
    <form className="registerForm">
      <RegisterInput refFunction={inputFocus} type={"text"} name={"email"} value={forgotPasswordValue.email} onChange={ChangeForgotPasswordValue} placeholder={"Username or Email Address"} />
      <RegisterPassword name={"new_password"} value={forgotPasswordValue.new_password} onChange={ChangeForgotPasswordValue} placeholder={"New Password"} />
      <RegisterPassword name={"confirm_password"} value={forgotPasswordValue.confirm_password} onChange={ChangeForgotPasswordValue} placeholder={"Confirm Password"} />
      <RegisterButton buttonFunction={HandleForgotPassword} buttonText={"SET NEW PASSWORD"} />
    </form>
  );
};

export default ForgotpasswordForm;