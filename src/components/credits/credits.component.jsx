import "./credits.styles.css"

const Credits = () => {
  return (
    <div id="credits">
      <h2>Credits</h2>
      <p>The images were downloaded from Freepik and later modified. Here are the direct links:</p>
      <div className="credits-list">
        <span>Set 1:</span>
        <a href="https://www.freepik.com/free-vector/colorful-alphabet_958008.htm" target="_blank" rel="noreferrer" style={{display: "block"}}>Designed by Sapann-Design / Freepik</a>
        <span>Set 2:</span>
        <a href="https://www.freepik.com/free-vector/hand-drawn-colorful-alphabet_2920859.htm" target="_blank" rel="noreferrer" style={{display: "block"}}>Designed by pikisuperstar / Freepik</a>
      </div>
    </div>
  )
}

export default Credits
