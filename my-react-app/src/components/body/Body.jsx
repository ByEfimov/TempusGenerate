import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";
import usersData from "../../storage/storage";
import { useState } from "react";

export let UsersData;

function Body(props) {
  const {
    setSelectTilte,
    OpenAddToDay,
    setOpenAddToDay,
    OpenAddTommorow,
    setOpenAddTommorow,
    OpenAddAll,
    setOpenAddAll,
  } = props;

  // eslint-disable-next-line no-unused-vars
  const [UserData, setUserdata] = useState(usersData);

  function UpdateTasks() {
    if (JSON.parse(localStorage.getItem("storage")) != undefined) {
      UserData[0].userTasks = JSON.parse(localStorage.getItem("storage"));
    }
  }
  UsersData = UserData;
  UpdateTasks();
  return (
    <section className="body">
      <AllPlace
        OpenAdd={OpenAddAll}
        setOpenAdd={setOpenAddAll}
        UserData={UserData}
        setSelectTilte={setSelectTilte}
      ></AllPlace>
      <MainPlace
        OpenAdd={OpenAddToDay}
        setOpenAdd={setOpenAddToDay}
        UserData={UserData}
      ></MainPlace>
      <TommorowPlace
        OpenAdd={OpenAddTommorow}
        UserData={UserData}
        setOpenAdd={setOpenAddTommorow}
      ></TommorowPlace>
    </section>
  );
}
export default Body;
