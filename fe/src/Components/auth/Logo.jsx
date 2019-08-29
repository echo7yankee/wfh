import React from "react";

//style
import style from "./auth.module.css";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img src="/images/logo.png" alt="logo" />
    </div>
  );
};

export default Logo;
