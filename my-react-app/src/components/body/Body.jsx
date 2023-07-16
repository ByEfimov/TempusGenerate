import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";
import usersData from "../../storage/storage";
import { useState } from "react";

function Body(props) {
  const { setSelectTilte } = props;
  let count = 0;
  const [UserData, setUserdata] = useState(usersData);
  if (JSON.parse(localStorage.getItem("storage")) != undefined && count == 0) {
    count++;
    console.log(UserData);
    UserData[0].userTasks = JSON.parse(localStorage.getItem("storage"));
  }

  return (
    <section className="body">
      <AllPlace UserData={UserData} setSelectTilte={setSelectTilte}></AllPlace>
      <MainPlace UserData={UserData}></MainPlace>
      <TommorowPlace UserData={UserData}></TommorowPlace>
    </section>
  );
}
export default Body;
