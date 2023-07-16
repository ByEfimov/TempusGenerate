import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";
import usersData from "../../storage/storage";
import { useState } from "react";
import AddTask from "./components/Addtask";

function Body(props) {
  const { setSelectTilte, OpenAdd, setOpenAdd } = props;
  let count = 0;

  const [UserData, setUserdata] = useState(usersData);

  if (JSON.parse(localStorage.getItem("storage")) != undefined && count == 0) {
    count++;
    UserData[0].userTasks = JSON.parse(localStorage.getItem("storage"));
  }

  return (
    <section className="body">
      <AllPlace
        OpenAdd={OpenAdd}
        setOpenAdd={setOpenAdd}
        UserData={UserData}
        setSelectTilte={setSelectTilte}
      ></AllPlace>
      <MainPlace
        setSelectTilte={setSelectTilte}
        OpenAdd={OpenAdd}
        setOpenAdd={setOpenAdd}
        UserData={UserData}
      ></MainPlace>
      <TommorowPlace
        setSelectTilte={setSelectTilte}
        OpenAdd={OpenAdd}
        UserData={UserData}
        setOpenAdd={setOpenAdd}
      ></TommorowPlace>
    </section>
  );
}
export default Body;
