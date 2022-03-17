// Dependencies
import React from "react";

// Styles
import logoStyles from "../styles/components/logo.module.scss";

const Logo: React.FC = () => {
  return (
    <a href="/" title="space.user" className={logoStyles.logoContent}>
      <span>space</span>.<span>user</span>
    </a>
  );
};

export default Logo;
