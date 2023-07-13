import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";
import usersData from "../../storage/storage";
import { useState } from "react";

function Body() {
  const [UserData, setUserdata] = useState(usersData);
  return (
    <section className="body">
      <AllPlace UserData={UserData}></AllPlace>
      <MainPlace UserData={UserData}></MainPlace>
      <TommorowPlace UserData={UserData}></TommorowPlace>
    </section>
  );
}
export default Body;
