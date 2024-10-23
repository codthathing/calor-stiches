import RegisterSection from "../register_section";
import ForgotpasswordForm from "./forgot_password_form";

const ForgotPasswordPage = () => {
  return <RegisterSection headText={"Forgotten Password?"} RegisterForm={ForgotpasswordForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />
}

export default ForgotPasswordPage;