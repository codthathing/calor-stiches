import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

const RegisterNav = ({nextRegister, navText}) => {
  const { setPresentRegister } = useContext(ToggleRegister);

  return <p onClick={() => setPresentRegister(nextRegister)} className="registerNavText">{navText}</p>
};

export default RegisterNav;