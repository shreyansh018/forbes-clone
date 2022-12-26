import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/body";
import Cards from "./Components/cards";
import Firstbottom from "./Components/firstbottom";
import Footer from "./Components/footer";
import Secondbottom from "./Components/secondbottom";
import Widget from "./Components/widget";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Cards />
      <Firstbottom />
      <Widget />
      <Secondbottom />

      <Footer />
    </div>
  );
}

export default App;
