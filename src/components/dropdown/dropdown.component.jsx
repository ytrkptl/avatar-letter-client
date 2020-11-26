import "./dropdown.styles.css"

// Credits to https://codepen.io/Scotho/pen/ygjOPj
const Dropdown = ({scrollTo}) => {
  return (
    <span className="dropdown">
      <button>Menu</button>
      <label>
        <input type="checkbox" />
        <ul>
          <li onClick={()=>scrollTo("how-to-get-started")}>Docs</li>
          <li onClick={()=>scrollTo("how-to-get-started")}>
            <a href="https://github.com/ytrkptl/avatar-letter-client" target="_blank" rel="noreferrer" className="dropdown-link">GitHub</a>
          </li>
          {/* <li className="divider"></li> */}
        </ul>
      </label>
    </span>
  )
}

export default Dropdown
