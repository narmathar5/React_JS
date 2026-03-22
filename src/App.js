import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { Header, Footer, MoviesGrid } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
