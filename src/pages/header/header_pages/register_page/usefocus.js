import { useRef, useEffect }  from "react";

export const useFocus = (presentRegister) => {
  const inputFocus = useRef("")
  useEffect(()=>{
    inputFocus.current.focus()
  },[presentRegister])

  return {inputFocus}
}