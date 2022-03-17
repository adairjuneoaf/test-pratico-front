// Dependencies
import React, { ButtonHTMLAttributes, ReactNode } from "react";

// Styles
import buttonStyles from "../styles/components/button.module.scss";

// Typings[TypeScript]
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: ReactNode;
  children?: ReactNode;
  typeAction: "edit" | "remove" | "default";
}

const Button: React.FC<ButtonProps> = ({ typeAction = "default", name = "Botão", icon, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={`${buttonStyles.buttonContent} ${typeAction === "edit" && buttonStyles.buttonAdd} ${typeAction === "remove" && buttonStyles.buttonRemove}`}
    >
      <p className={buttonStyles.iconButton}>{icon}</p>
      {icon ? <span>&nbsp;&nbsp;</span> : ""}
      {name}
    </button>
  );
};

export default Button;
