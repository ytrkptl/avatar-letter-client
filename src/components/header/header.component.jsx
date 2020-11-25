import Dropdown from "../dropdown/dropdown.component"
import Logo from "../logo/logo.component"
import "./header.styles.css"

const Navigation = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="titleAndLogo" href="/">
          <Logo />
          <h3 className="title">Avatar Letter</h3>
        </a>
        <div className="div-on-far-right">
          <div className="div-on-far-right-links">
            <a href="/about" className="nav-link">Docs</a>
            <a href="/about" className="nav-link">GitHub</a>
          </div>
          <Dropdown />
        </div>
      </nav>
    </header>
  )
}

export default Navigation
