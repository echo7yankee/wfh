import React from "react";

//style
import style from "./auth.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={style.footerContainer}>
      <p>Copyright &copy; {year} Softvision</p>
      <p>All rights Reserved</p>
    </div>
  );
};

export default Footer;
