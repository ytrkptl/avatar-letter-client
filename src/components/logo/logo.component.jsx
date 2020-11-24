import logo from "../../assets/24.png";
import "./logo.styles.css"

const Logo = () => {
  return (
    <div className="logo-div">
      <img src={logo} alt="logo" className="logo-img" />
    </div>
  );
};

export default Logo;