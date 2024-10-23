import RegisterCancel from "../register_page/register_cancel";
import RegisterHead from "../register_page/register_head";
import user_profile from "../../../../asset/images-icons/profile_icon/user_profile.png";

const UserProfile = () => {
  return (
    <section className="registerSection navSections">
      <main className="mainRegister mainNav">
        <RegisterCancel />
        <div className="registerDiv">
          <RegisterHead headText={"Profile"} />
          <div id="user-profile-div">
            <img src={user_profile} alt="profile_image" id="user-profile-img" />
          </div>
          <div id="user-details-div">
            <p className="user-details-text">Username: <span className="user-details-span">John Doe</span></p>
            <p className="user-details-text">Email: <span className="user-details-span">johndoe@gmail.com</span></p>
          </div>
          <div id="user-buttons-div">
            <button type="button" className="user-buttons">Upload Profile</button>
            <button type="button" className="user-buttons">Log Out</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UserProfile;