import { useState, useEffect, useContext } from "react";
import { ToggleRegister } from "../contextpage";

export const useHead = () => {
  const { navbar, setNavbar } = useContext(ToggleRegister);
  const [header, setHeader] = useState(false);

  let lastScrollY = 120;
  const changeHeader = () => {
    let presentScrollY = window.scrollY;
    const path = window.location.pathname;
    
    if (presentScrollY > lastScrollY) {
      setHeader(true);
    } else {
      setHeader(false);
    }
    
    if (presentScrollY > 120) {
      lastScrollY = presentScrollY;
      setNavbar(true);
    } else {
      setNavbar(false)
    }

    if(presentScrollY <= 120 && path !== "/") {
      setNavbar(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    }
  }, [])

  return { header, navbar };
}