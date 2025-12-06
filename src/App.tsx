import Header from "./components/header/header.component";
import MainComponent from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

function App() {
  // the following function accepts hashname or id
  // and scrolls to that id's location on the page
  const scrollTo = (hashName: string) => {
    let parentRect = document.body.getBoundingClientRect();
    let element = document.getElementById(hashName);
    if (element) {
      let rect = element.getBoundingClientRect();
      let offset = rect.top - parentRect.top - 20;
      window.scrollTo(0, offset);
    }
  };

  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <MainComponent scrollTo={scrollTo} />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
