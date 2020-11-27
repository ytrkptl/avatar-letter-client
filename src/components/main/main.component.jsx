import Hero from "../hero/hero.component"
import FoundElsewhere from "../../assets/found-elsewhere.png"
import UrlBreakdown from "../../assets/url-breakdown-new.png"
import Credits from "../credits/credits.component"
import { useWindowSize } from "../../custom-hooks/use-window-size.jsx"
import "./main.styles.css"

const MainComponent = ({scrollTo}) => {

  const size = useWindowSize();

  // Source: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  const copyToClipboard = async () => {
     /* Get the text field */
    var copyText = document.getElementById("code");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    copyText.click();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    alert("Copied successfully! Now paste it in your img tag's src attribute.");
  }

  return (
    <div className="main">
      <Hero scrollTo={scrollTo}/>
      <article className="article">
        <p className="article-para">
           I made this to use in another app I'm working on so I don't have to rely on other Avatar libraries or providers, or maybe just for fun.
        </p>
        <p className="article-para">
            The idea is to return a beautiful 3D-ish looking letter's image to the user rather than the default ones we see in most applications while making sure to provide a variety of sizes, types (1 for now), and formats (2 for now) for free. They can also be non 3D-ish, but for now, it only contains one type, called type1, which looks 3D-ish.
        </p>
        <div className="avatar-letter-img-container">
          <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/tiny/a/webp`} alt="avatar letter tiny a" className="avatar-letter-img" />
          <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/small/a/webp`} alt="avatar letter small a" className="avatar-letter-img" /> 
          <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/med/a/webp`} alt="avatar letter medium a" className="avatar-letter-img" /> 
          <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/big/a/webp`} alt="avatar letter big a" className="avatar-letter-img" /> 
          <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/large/a/webp`} alt="avatar letter large a" className="avatar-letter-img" /> 
          <img src={`${process.env.REACT_APP_API_URL}/api/file/set1/full/a/webp`} alt="avatar letter full a" className="avatar-letter-img" /> 
        </div>
        <span className="img-description">3D-ish looking avatar-letter provided by avatar-letter</span>
        <img alt="samples avatar-letter found elsewhere" src={FoundElsewhere} className="avatar-letter-img avatar-letter-img-2" height="400px" />
        <span className="img-description img-description-2">avatar-letters found elsewhere in component or other libraries</span>
        <p className="article-para">
          The images were edited in PowerPoint initially after downloading from Freepik first. The images were then resized, compressed, and saved in other formats using the Sharp library. It's crazy how sharp can save hundreds of images on your device in a split of a second.
        </p>
        <p className="article-para">
          As far as creating, updating, or deleting any so-called "types" as I mentioned above, sizes, or formats (basically the static images found in public/letters folder) is concerned, I'd like to be the one maintaining that right now. I will consider ideas for improvement, or ideas for expanding this and providing users with more options
        </p>
        <h2 id="how-to-get-started">How to use this/How to Get Started?</h2>
        <h4>To use this in your project, the steps are simple:</h4>
        <ol className="ol">
          <li>
            <span>Simply add the following url as the src attribute in your img tags:</span>
            <span>{`${process.env.REACT_APP_API_URL}/api/file/set1/tiny/a/webp`}</span>
          </li>
          <li >Modify the url as per your needs.</li>
        </ol>
        <h2 className="breakdown-h2">Here's a breakdown of the url:</h2>
        <img src={UrlBreakdown} alt="url-breakdown" className="url-breakdown-img"/>
        <div className="code-button-container">
          <h3 className="complete-url-h4">The complete url looks like the following:</h3>
          <textarea type="text" readOnly={true} cols="100" rows={size.width < 600 ? "2": "1"}  id="code" className="code-textarea" value={`${process.env.REACT_APP_API_URL}/api/file/set1/tiny/a/webp`} />
          <button onClick={()=>copyToClipboard()}>Copy</button>
        </div>
        <div>
          <h3>What options or params can I pass in?</h3>
          <div className="options">
            <span className="col-1">returnType</span>
            <span>file (may add more option like returning binary data or may completely remove this)</span>
            <span className="col-1">size</span>
            <span>tiny (24px), small (32px), med (48px), big (64px), large (128px), full (225px)</span>
            <span className="col-1">letters</span>
            <span>a-z only</span>
            <span className="col-1">format</span>
            <span>png or webp</span>
          </div>
        </div>
      </article>
      <Credits />
    </div>
  )
}

export default MainComponent
