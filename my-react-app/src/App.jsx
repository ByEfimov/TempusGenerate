import React, { useState } from "react";
import "./App.css";
import "./assets/style.css";
import Body from "./pages/body/index";
import Header from "./components/header/header";

export let useCustomHook = () => {
  const [OpenAdd, setOpenAdd] = useState(false);
  return { OpenAdd, setOpenAdd };
};

function App() {
  const [selectTilte, setSelectTilte] = useState("Все дни");
  const [selectMode, setSelectMode] = useState("ToDay");
  const RefBody = React.createRef();

  const ReliseVersion = "0.8";
  if (localStorage.getItem("UseVersion") !== ReliseVersion) {
    localStorage.setItem("UseVersion", ReliseVersion);
    localStorage.removeItem("persist:root");
    location.reload();
  }

  return (
    <>
      <Header
        selectMode={selectMode}
        setSelectMode={setSelectMode}
        selectTilte={selectTilte}
        RefBody={RefBody}
      ></Header>
      <Body RefBody={RefBody} setSelectTilte={setSelectTilte}></Body>
    </>
  );
}

export default App;
