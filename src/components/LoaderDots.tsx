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
};

const LoaderDots: React.FC<LoaderDotsProps> = ({ width, height }) => {
  return (
    <div className={loaderDotsStyles.loaderStyle}>
      <ThreeDots color="#d34591" width={width} height={height} />
    </div>
  );
};

export default LoaderDots;
