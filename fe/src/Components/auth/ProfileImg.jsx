import React from "react";

//style
import style from "./auth.module.css";

const ProfileImg = () => {
  return (
    <div className={style.profileImgContainer}>
      <img src="/images/profile-img.png" alt="profile img" />
    </div>
  );
};

export default ProfileImg;
