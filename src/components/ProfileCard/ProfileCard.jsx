import "./styles.css";
import { profileData } from "./data";

function ProfileCard() {
   return (
    <div className="profile-card-wrapper">
      <img src={profileData.avatar_img} />
      <div>Name: {profileData.name}</div>
      <div>Profession: {profileData.profession}</div>
      <div>Hobby: {profileData.hobby}</div>
    </div>
  );
}

export default ProfileCard;
