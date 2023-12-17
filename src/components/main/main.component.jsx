import Hero from "../hero/hero.component";
import FoundElsewhere from "../../assets/found-elsewhere.png";
import UrlBreakdown from "../../assets/url-breakdown-hostinger-2024-800px.png";
import Credits from "../credits/credits.component";
import { useWindowSize } from "../../custom-hooks/use-window-size.jsx";
import "./main.styles.css";

const MainComponent = ({ scrollTo }) => {
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
  };

  return (
    <div className="main">
      <Hero scrollTo={scrollTo} />
      <article className="article">
        <p className="article-para">
          I made this to use in another app I'm working on so I don't have to
          rely on other Avatar libraries or providers, or maybe just for fun.
        </p>
        <p className="article-para">
          The idea is to return a beautiful 3D-ish, stylish, cool, or
          unique-looking letter's image to the user rather than the default ones
          we see in most applications while making sure to provide a variety of
          sizes, sets (2 for now), and formats (2 for now) for free.
        </p>
        <div className="avatar-letter-img-container">
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set1/tiny/a/png`}
            alt="avatar letter tiny set1 a"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set1/small/a/png`}
            alt="avatar letter small set1 a"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set1/med/a/png`}
            alt="avatar letter medium set1 a"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set1/big/a/png`}
            alt="avatar letter big set1 a"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set1/large/a/png`}
            alt="avatar letter large set1 a"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set1/full/a/png`}
            alt="avatar letter full set1 a"
            className="avatar-letter-img"
          />
        </div>
        <span className="img-description">
          3D-ish looking image provided by avatar-letter's set1
        </span>
        <div className="avatar-letter-img-container">
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set2/tiny/andy/png`}
            alt="avatar letter tiny set2 andy"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set2/small/z/png`}
            alt="avatar letter small set2 z"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set2/med/o/png`}
            alt="avatar letter medium set2 o"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set2/big/d/png`}
            alt="avatar letter big set2 d"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set2/large/x/png`}
            alt="avatar letter large set2 x"
            className="avatar-letter-img"
          />
          <img
            src={`${process.env.REACT_APP_API_URL}/api/file/set2/full/B/png`}
            alt="avatar letter full set2 B"
            className="avatar-letter-img"
          />
        </div>
        <span className="img-description">
          Stylish-looking letter's image provided by avatar-letter's set2
        </span>
        <img
          alt="samples avatar-letter found elsewhere"
          src={FoundElsewhere}
          className="avatar-letter-img avatar-letter-img-2"
          height="400px"
        />
        <span className="img-description img-description-2">
          avatar-letters found elsewhere in component or other libraries
        </span>
        <p className="article-para">
          The images were edited in PowerPoint initially after downloading from
          Freepik first. The images were then resized, compressed, and saved in
          other formats using the Sharp library. It's crazy how sharp can save
          hundreds of images on your device in a split of a second.
        </p>
        <p className="article-para">
          As far as creating, updating, or deleting any sets, sizes, or formats
          (basically the static images found in public/letters folder) is
          concerned, I'd like to be the one maintaining that right now. I will
          consider ideas for improvement, or ideas for expanding this and
          providing users with more options
        </p>
        <h2 id="how-to-get-started">How to use this/How to Get Started?</h2>
        <h4>To use this in your project, the steps are simple:</h4>
        <ol className="ol">
          <li>
            <span>
              Simply add the following url as the src attribute in your img
              tags:
            </span>
            <span>{`${process.env.REACT_APP_API_URL}/api/file/set1/tiny/a/png`}</span>
          </li>
          <li>Modify the url as per your needs.</li>
        </ol>
        <h2 className="breakdown-h2">Here's a breakdown of the url:</h2>
        <img
          src={UrlBreakdown}
          alt="url-breakdown"
          className="url-breakdown-img"
        />
        <div className="code-button-container">
          <h3 className="complete-url-h4">
            The complete url looks like the following:
          </h3>
          <textarea
            type="text"
            readOnly={true}
            cols="100"
            rows={size.width < 600 ? "2" : "1"}
            id="code"
            className="code-textarea"
            value={`${process.env.REACT_APP_API_URL}/api/file/set1/big/a/png`}
          />
          <button onClick={() => copyToClipboard()}>Copy</button>
        </div>
        <div>
          <h3>What options or params can I pass in?</h3>
          <div className="options">
            <span className="col-1">returnType</span>
            <span>
              file (may add more option like returning binary data or may
              completely remove this)
            </span>
            <span className="col-1">set#</span>
            <span>set1, or set2 (for now)</span>
            <span className="col-1">size</span>
            <span>
              tiny (24px), small (32px), med (48px), big (64px), large (128px),
              full (225px)
            </span>
            <span className="col-1">name</span>
            <span>
              a-z or A-Z only (will find first matching alphabet and return that
              alphabet's image)
            </span>
            <span className="col-1">format</span>
            <span>png or webp</span>
          </div>
        </div>
      </article>
      <Credits />
    </div>
  );
};

export default MainComponent;
