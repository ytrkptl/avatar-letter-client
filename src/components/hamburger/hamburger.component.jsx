import { useRef } from "react";
import "./hamburger.styles.css";

const Hamburger = ({hamburgerIsClicked, toggleHamburger}) => {
  // const [hamburgerIsClicked, setHamburgerIsClicked] = useState(false)
  
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();

  return (
    <div
      className="hamburger"
      open={hamburgerIsClicked}
      onClick={()=>toggleHamburger()}
    >
      <span ref={bar1} open={hamburgerIsClicked} className="hamburger-bar"/>
      <span ref={bar2} open={hamburgerIsClicked} className="hamburger-bar"/>
      <span ref={bar3} open={hamburgerIsClicked} className="hamburger-bar"/>
    </div>
  )
}

export default Hamburger
