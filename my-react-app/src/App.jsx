import { useState } from "react";
import "./App.css";
import "./assets/style.css";
import Body from "./components/body/Body";
import Header from "./components/header/header";

function App() {
  const [selectTilte, setSelectTilte] = useState("Все дни");
  const [selectMode, setSelectMode] = useState("ToDay");
  const [OpenAdd, setOpenAdd] = useState(false);
  return (
    <>
      <Header
        selectMode={selectMode}
        setSelectMode={setSelectMode}
        selectTilte={selectTilte}
        OpenAdd={OpenAdd}
      ></Header>
      <Body
        OpenAdd={OpenAdd}
        setOpenAdd={setOpenAdd}
        setSelectTilte={setSelectTilte}
      ></Body>
      <footer className="footers"></footer>
    </>
  );
}

export default App;
