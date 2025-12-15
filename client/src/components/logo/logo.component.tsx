import "./logo.styles.css";
import { API_URL } from "../../constants";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img
        src={`${API_URL}/api/file/set1/med/a/webp`}
        alt="logo"
        className="logo__img"
      />
    </div>
  );
};

export default Logo;
