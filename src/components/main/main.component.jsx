import Hero from "../hero/hero.component"
import FoundElsewhere from "../../assets/found-elsewhere.png"
import "./main.styles.css"

const MainComponent = () => {
  return (
    <div className="main">
      <Hero />
      <article className="article">
        <p className="article-para">
           I made this to use in another app I'm working on so I don't have to rely on other Avatar libraries or providers, or maybe just for fun.
        </p>
        <p className="article-para">
            The idea is to return a beautiful 3D-ish looking letter's image to the user rather than the default ones we see in most applications while making sure to provide a variety of sizes, types (1 for now), and formats (2 for now) for free. They can also be non 3D-ish, but for now, it only contains one type, called type1, which looks 3D-ish.
        </p>
        <div className="avatar-letter-img-container">
          <img src="http://localhost:5000/api/avatar-letter/file/tiny/a/webp" alt="avatar letter tiny a" className="avatar-letter-img" />
          <img src="http://localhost:5000/api/avatar-letter/file/small/a/webp" alt="avatar letter small a" className="avatar-letter-img" /> 
          <img src="http://localhost:5000/api/avatar-letter/file/med/a/webp" alt="avatar letter medium a" className="avatar-letter-img" /> 
          <img src="http://localhost:5000/api/avatar-letter/file/big/a/webp" alt="avatar letter big a" className="avatar-letter-img" /> 
          <img src="http://localhost:5000/api/avatar-letter/file/large/a/webp" alt="avatar letter large a" className="avatar-letter-img" /> 
          <img src="http://localhost:5000/api/avatar-letter/file/full/a/webp" alt="avatar letter full a" className="avatar-letter-img" /> 
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
      </article>
    </div>
  )
}

export default MainComponent
