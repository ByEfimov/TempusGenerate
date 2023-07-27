import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";
import { useSelector, useDispatch } from "react-redux";
import SettingsPlace from "./Places/SettingsPlace";
import { useState } from "react";

export let UsersData;
export let DellDispatch;

function Body(props) {
  const { setSelectTilte, RefBody } = props;
  const [SettingOpen, setSettingOpen] = useState(false);

  DellDispatch = useDispatch();

  const UserTasks = useSelector((state) => state.user.userTasks);
  UsersData = UserTasks;
  console.log(UserTasks);
  return (
    <section className="body" ref={RefBody}>
      <AllPlace
        setSettingOpen={setSettingOpen}
        setSelectTilte={setSelectTilte}
      ></AllPlace>
      <MainPlace></MainPlace>
      <TommorowPlace></TommorowPlace>

      {SettingOpen ? (
        <SettingsPlace
          setSelectTilte={setSelectTilte}
          setSettingOpen={setSettingOpen}
        ></SettingsPlace>
      ) : (
        ""
      )}
    </section>
  );
}
export default Body;
