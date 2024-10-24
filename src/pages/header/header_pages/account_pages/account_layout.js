import { useState } from "react";
import RegisterLayout from "./register_page/registerlayout";
import UserProfile from "./user_profile/user_profile";

const AccountLayout = () => {
  const [status, setStatus] = useState("REGISTER");

  if (status === "REGISTER") {
    return <RegisterLayout />
  } else if (status === "LOGGED_IN") {
    return <UserProfile />
  };
};

export default AccountLayout;