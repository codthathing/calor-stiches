import { useState } from "react";
import RegisterCancel from "../register_page/register_cancel";
import RegisterHead from "../register_page/register_head";
import UserImage from "./user_image";
import user_profile from "../../../../../asset/images-icons/profile_icon/user_profile.png";
import UserDetails from "./user_details";
import UserButtons from "./user_buttons";

const UserProfile = () => {
  const [user, setUser] = useState({user_image: user_profile, user_name: "John Doe", user_email: "johndoe@gmail.com"});

  return (
    <section className="registerSection navSections">
      <main className="mainRegister mainNav">
        <RegisterCancel />
        <div className="registerDiv">
          <RegisterHead headText={"Profile"} />
          <UserImage userImage={user.user_image} />
          <UserDetails userName={user.user_name} userEmail={user.user_email} />
          <UserButtons />
        </div>
      </main>
    </section>
  );
};

export default UserProfile;