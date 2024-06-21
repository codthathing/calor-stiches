import React, { createContext, useState } from "react";

export const ToggleRegister = createContext(); 

export const OptNavProvider = ({children}) => {
  const [register, setRegister] = useState(false)
  const [presentRegister, setPresentRegister] = useState("LOGIN")

  return (
    <ToggleRegister.Provider value={{register, setRegister, presentRegister, setPresentRegister}}>
      {children}
    </ToggleRegister.Provider>
  );
}