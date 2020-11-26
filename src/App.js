import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Docs from "./pages/docs/docs.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/docs" component={Docs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
