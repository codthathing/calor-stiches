import { useRef, useEffect } from "react";

export const useScroll = (page, body) => {
  const presentScroll = useRef('');
  useEffect(() => {
    presentScroll.current.style.overflowY = page;
    document.querySelector("body").style.overflowY = body;
  }, []);

  return {presentScroll};
}