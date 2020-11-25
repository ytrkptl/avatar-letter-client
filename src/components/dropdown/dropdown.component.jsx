import { useState, useRef } from "react";
import {useOnClickOutside} from "../../custom-hooks/onClickOutside"
import Hamburger from "../hamburger/hamburger.component";
import "./dropdown.styles.css";

// Source: https://codepen.io/Scotho/pen/ygjOPj
const DropdownBody = () => {
  const dropdownRef = useRef()
  const navDropdown = useRef()
  const [hamburgerIsClicked, setHamburgerIsClicked] = useState(false)

  const toggleHamburger = () => {
    setHamburgerIsClicked(hamburgerIsClicked=> !hamburgerIsClicked)
    console.log(hamburgerIsClicked)
    navDropdown.current.classList.toggle("dropdown-body-open")
  }

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(dropdownRef, () => toggleHamburger());

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Hamburger hamburgerIsClicked={hamburgerIsClicked} toggleHamburger={toggleHamburger} />
      <nav className="dropdown-body" ref={navDropdown}>
        <a href="/about" className="dropdown-link">Docs</a>
        <a href="/about" className="dropdown-link">GitHub</a>
      </nav>
    </div>
  )
}

export default DropdownBody
