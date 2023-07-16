import { useState } from "react";
import "./App.css";
import "./assets/style.css";
import Body from "./components/body/Body";
import Header from "./components/header/header";

function App() {
  const [selectTilte, setSelectTilte] = useState("Все дни");
  return (
    <>
      <Header selectTilte={selectTilte}></Header>
      <Body setSelectTilte={setSelectTilte}></Body>
      <footer className="footers"></footer>
    </>
  );
}

export default App;
