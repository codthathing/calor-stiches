import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";

const RegisterCancel = () => {
  const { setAccount } = useContext(ToggleRegister);

  return <span className="cancelBtn" onClick={() => setAccount(false)}><i className="fa-solid fa-xmark cancelIcon"></i></span>
};

export default RegisterCancel;