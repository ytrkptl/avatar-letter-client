import "./logo.styles.css"

const Logo = () => {
  return (
    <div className="logo-div">
      <img src={"http://localhost:5000/api/avatar-letter/file/med/a/webp"} alt="logo" className="logo-img" />
    </div>
  );
};

export default Logo;