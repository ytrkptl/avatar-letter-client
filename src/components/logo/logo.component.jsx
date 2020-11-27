import "./logo.styles.css"

const Logo = () => {
  return (
    <div className="logo-div">
      <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/med/a/webp`} alt="logo" className="logo-img" />
    </div>
  );
};

export default Logo;