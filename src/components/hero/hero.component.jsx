import "./hero.styles.css";

const Hero = ({ scrollTo }) => {
  return (
    <div className="hero">
      <h1 className="hero__h1">Avatar Letter</h1>      
      <p className="hero__p">A 3D-ish, stylish, cool, or unique-looking avatar-letter!</p>
      <button className="hero__button" onClick={()=>scrollTo("how-to-get-started")}>Get Started</button>
    </div>
  )
}

export default Hero
