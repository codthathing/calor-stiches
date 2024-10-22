import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

const RegisterCancel = () => {
  const { setRegister } = useContext(ToggleRegister);

  return <span className="cancelBtn" onClick={() => setRegister(false)}><i className="fa-solid fa-xmark cancelIcon"></i></span>
};

export default RegisterCancel;