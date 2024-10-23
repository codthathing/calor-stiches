import RegisterSection from "../register_section";
import CreateAccountForm from "./create_account_form";

const CreateAccountPage = () => {
  return <RegisterSection headText={"Create Account"} RegisterForm={CreateAccountForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />
}

export default CreateAccountPage;