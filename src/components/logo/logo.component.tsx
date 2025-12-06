import "./logo.styles.css"
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={`${import.meta.env.VITE_API_URL}/api/file/set1/med/a/webp`} alt="logo" className="logo__img" />
    </div>
  );
};

export default Logo;
