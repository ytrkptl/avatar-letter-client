// import { Link } from "react-router-dom"
import Dropdown from "../dropdown/dropdown.component"
import Logo from "../logo/logo.component"
import "./header.styles.css"
import React from "react";

interface HeaderProps {
  scrollTo: (hashName: string) => void;
}

const Navigation: React.FC<HeaderProps> = ({scrollTo}) => {
  return (
    <header className="header" id="header">
      <nav className="nav">
        <div className="titleAndLogo" onClick={()=>scrollTo("header")}>
          <Logo />
          <h3 className="title">Avatar Letter</h3>
        </div>
        <div className="div-on-far-right">
          <div className="div-on-far-right-links">
            <span className="nav-link" onClick={()=>scrollTo("how-to-get-started")}>Docs</span>
            <a href="https://github.com/ytrkptl/avatar-letter-client" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          </div>
          <Dropdown scrollTo={scrollTo}/>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
