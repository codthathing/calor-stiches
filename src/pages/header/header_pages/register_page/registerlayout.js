import { useContext } from "react";
import LoginPage from "./main_pages/login";
import CreateAccountPage from "./main_pages/createaccount";
import ForgotPasswordPage from "./main_pages/forgotpassword";
import { ToggleRegister } from "../../../contextpage";

const RegisterLayout = () => {
  const { presentRegister } = useContext(ToggleRegister);

  if (presentRegister == "LOGIN") {
    return <LoginPage></LoginPage>
  } else if (presentRegister == "CREATEACCOUNT") {
    return <CreateAccountPage></CreateAccountPage>
  } else if (presentRegister == "FORGOTPASSWORD") {
    return <ForgotPasswordPage></ForgotPasswordPage>
  }
}

export default RegisterLayout;