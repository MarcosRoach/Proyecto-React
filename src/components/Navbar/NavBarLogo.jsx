import React from "react";
import logo from "../../assets/logo.webp";
import styles from "./navBarLogo.module.css";

const NavBarLogo = () => {
  return <img src={logo} alt="logo" className={styles.logo} />;
};

export default NavBarLogo;
