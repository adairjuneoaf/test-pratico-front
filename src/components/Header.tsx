// Dependencies
import React from "react";

// Components
import Logo from "./Logo";

// Styles
import headerStyles from "../styles/components/header.module.scss";
import Profile from "./Profile";

const Header: React.FC = () => {
  return (
    <div className={headerStyles.headerContent}>
      <Logo />
      <section className={headerStyles.sectionProfile}>
        <Profile name="Adair Juneo" occupation="Desenvolvedor" avatar="https://avatars.githubusercontent.com/u/88504998?v=4" email="adair_juneo@hotmail.com" />
      </section>
    </div>
  );
};

export default Header;
