import "./hero.styles.css";

const Hero = ({scrollTo}) => {
  return (
    <div className="hero">
      <h1>Avatar Letter</h1>
      <p>A 3D-ish style avatar!</p>
      <button className="hero-button" onClick={()=>scrollTo("how-to-get-started")}>Get Started</button>
    </div>
  )
}

export default Hero
