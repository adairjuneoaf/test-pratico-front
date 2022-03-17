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
}

const Profile: React.FC<ProfileUserProps> = ({ name = "Nome", avatar = "", email = "default@default.com", occupation = "Default" }) => {
  return (
    <div className={profileStyles.profileContent}>
      <nav className={profileStyles.navigationButtons}>
        <ul>
          <li>
            <FiBell href="/" title="Notificações" />
          </li>
          {/* <li>
            <a href="/" title="Configurações">
              <FiSettings className="iconButton" />
            </a>
          </li> */}
          <li>
            <FiLogOut href="/" title="Efetuar Loggout" />
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
