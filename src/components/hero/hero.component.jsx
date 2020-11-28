import "./hero.styles.css";

const Hero = ({scrollTo}) => {
  return (
    <div className="hero">
      <h1 className="hero-h1">Avatar Letter</h1>      
      <p className="hero-p">A 3D-ish, stylish, cool, or unique-looking avatar!</p>
      <button className="hero-button" onClick={()=>scrollTo("how-to-get-started")}>Get Started</button>
    </div>
  )
}

export default Hero
