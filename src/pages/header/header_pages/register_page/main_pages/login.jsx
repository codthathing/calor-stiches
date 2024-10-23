import RegisterSection from "../register_section";
import LoginForm from "./login_form";


const LoginPage = () => {
  return <RegisterSection headText={"Log in"} RegisterForm={LoginForm} nextRegister={"CREATEACCOUNT"} navText={"REGISTER"} />
}

export default LoginPage;