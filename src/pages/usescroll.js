import { useRef, useEffect } from "react";

export const useScroll = () => {
  const presentScroll = useRef('');
  useEffect(() => {
    presentScroll.current.style.overflowY = "auto"
    document.querySelector("body").style.overflowY = "hidden"
  }, [])

  return {presentScroll}

}