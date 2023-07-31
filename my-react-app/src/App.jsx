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
