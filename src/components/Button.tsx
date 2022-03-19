// Dependencies
import React, { ButtonHTMLAttributes, ReactNode } from "react";

// Styles Dependencies
import LoaderDots from "./LoaderDots";

// Styles
import buttonStyles from "../styles/components/button.module.scss";

// Typings[TypeScript]
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  icon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  typeAction: "edit" | "remove" | "save" | "default";
}

const Button: React.FC<ButtonProps> = ({ typeAction = "default", name, icon, isLoading, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={`
      ${buttonStyles.buttonContent}
      ${typeAction === "edit" && buttonStyles.buttonAdd}
      ${typeAction === "remove" && buttonStyles.buttonRemove}
      ${typeAction === "save" && buttonStyles.buttonSave}
      `}
      disabled={isLoading && true}
    >
      {isLoading ? (
        <LoaderDots height={24} width={24} color={"#ffffff"} />
      ) : (
        <>
          <p className={buttonStyles.iconButton}>{icon}</p>
          {icon && name ? <span>&nbsp;&nbsp;</span> : ""}
          {name}{" "}
        </>
      )}
    </button>
  );
};

export default Button;
