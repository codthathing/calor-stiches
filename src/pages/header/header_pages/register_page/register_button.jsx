const RegisterButton = ({buttonFunction, buttonText}) => {
  return <button type="submit" className="navBtn registerBtn" onClick={buttonFunction}>{buttonText}</button>
};

export default RegisterButton;