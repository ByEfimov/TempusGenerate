import React, { useState } from "react";
import "./App.css";
import "./assets/style.css";
import Body from "./components/body/Body";
import Header from "./components/header/header";

function App() {
  const [selectTilte, setSelectTilte] = useState("Все дни");
  const [selectMode, setSelectMode] = useState("ToDay");
  const [OpenAddToDay, setOpenAddToDay] = useState(false);
  const [OpenAddTommorow, setOpenAddTommorow] = useState(false);
  const [OpenAddAll, setOpenAddAll] = useState(false);
  const RefBody = React.createRef();
  return (
    <>
      <Header
        selectMode={selectMode}
        setSelectMode={setSelectMode}
        selectTilte={selectTilte}
        RefBody={RefBody}
      ></Header>
      <Body
        RefBody={RefBody}
        OpenAddToDay={OpenAddToDay}
        setOpenAddToDay={setOpenAddToDay}
        OpenAddTommorow={OpenAddTommorow}
        setOpenAddTommorow={setOpenAddTommorow}
        OpenAddAll={OpenAddAll}
        setOpenAddAll={setOpenAddAll}
        setSelectTilte={setSelectTilte}
      ></Body>
      <footer className="footers"></footer>
    </>
  );
}

export default App;
