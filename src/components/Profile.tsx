// Main Dependencies
import React from "react";

// Styled Dependencies
import { FiLogOut, FiBell /* FiSettings */ } from "react-icons/fi";

// Styles
import profileStyles from "../styles/components/profile.module.scss";

// Typings[TypeScript]
interface ProfileUserProps {
  name: string;
  email: string;
  avatar: string;
  occupation: string;
  isNotification: boolean;
}

const Profile: React.FC<ProfileUserProps> = ({ name = "Nome", avatar = "", email = "default@default.com", occupation = "Default", isNotification = false }) => {
  return (
    <div className={profileStyles.profileContent}>
      <nav className={profileStyles.navigationButtons}>
        <ul>
          <li>
            <a href="/" className={`${profileStyles.iconButtonNavigation} ${isNotification && profileStyles.isNotification}`}>
              <FiBell href="/" title="Notificações" />
            </a>
          </li>
          {/* <li>
            <a href="/" title="Configurações">
              <FiSettings className="iconButton" />
            </a>
          </li> */}
          <li>
            <a href="/" className={profileStyles.iconButtonNavigation}>
              <FiLogOut href="/" title="Loggout" />
            </a>
          </li>
        </ul>
      </nav>
      <div className={profileStyles.userInfo}>
        <span>
          <h2>{name}</h2>
          <p>
            {occupation}
            <br />
            <a href="/" title="E-mail">
              {email}
            </a>
          </p>
        </span>
        <img src={avatar} alt="avatar_user" />
      </div>
    </div>
  );
};

export default Profile;
