import "./App.scss";
import Menu from "./components/Menu/Menu";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <header className="header__container">
        <img src={logo} className="header__logo" alt="Ximdex logo" />
        <h1>Ximdex Frontend Test</h1>
      </header>
      <Menu />
    </div>
  );
}

export default App;
