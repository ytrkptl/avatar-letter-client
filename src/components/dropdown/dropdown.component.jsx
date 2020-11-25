import "./dropdown.styles.css"

// Credits to https://codepen.io/Scotho/pen/ygjOPj
const Dropdown = () => {
  return (
    <span className="dropdown">
      <button>Menu</button>
      <label>
        <input type="checkbox" />
        <ul>
          <li onClick="console.log(1)">Action</li>
          <li>Another Action</li>
          <li>Something else here</li>
          <li className="divider"></li>
          <li>Separated link</li>
        </ul>
      </label>
    </span>
  )
}

export default Dropdown
