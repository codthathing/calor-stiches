import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const useConfirm = () => {
  const [confirm, setConfirm] = useState({ confirmPage: "", confirmHead: "", confirmText: "" });
  const confirmPage = useNavigate();

  useEffect(() => {
    if (confirm.confirmPage && confirm.confirmHead && confirm.confirmText) {
      confirmPage(`/pages/confirmation_page?link=${confirm.confirmPage}&head=${confirm.confirmHead}&text=${confirm.confirmText}`);
    }
  }, [confirm]);

  return { setConfirm };
};