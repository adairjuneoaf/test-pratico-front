// Main Dependencies
import React from "react";

// Styled Dependencies
import { ThreeDots } from "react-loader-spinner";

// Styles
import loaderDotsStyles from "../styles/components/loaderdots.module.scss";

// Typing[TypeScript]
type LoaderDotsProps = {
  width: number;
  height: number;
  color?: string;
};

const LoaderDots: React.FC<LoaderDotsProps> = ({ width, height, color = "#d34591" }) => {
  return (
    <div className={loaderDotsStyles.loaderStyle}>
      <ThreeDots color={color} width={width} height={height} />
    </div>
  );
};

export default LoaderDots;
