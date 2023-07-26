import React, { useState } from "react";
import "./App.css";
import "./assets/style.css";
import Body from "./components/body/Body";
import Header from "./components/header/header";
import { useTheme } from "./hooks/UseTheme";

export let useCustomHook = () => {
  const [OpenAdd, setOpenAdd] = useState(false);
  return { OpenAdd, setOpenAdd };
};

function App() {
  const [selectTilte, setSelectTilte] = useState("Все дни");
  const [selectMode, setSelectMode] = useState("ToDay");
  const { theme, setTheme } = useTheme();
  const RefBody = React.createRef();
  return (
    <>
      <Header
        selectMode={selectMode}
        setSelectMode={setSelectMode}
        selectTilte={selectTilte}
        RefBody={RefBody}
      ></Header>
      <Body RefBody={RefBody} setSelectTilte={setSelectTilte}></Body>
      <footer className="footers"></footer>
    </>
  );
}

export default App;
