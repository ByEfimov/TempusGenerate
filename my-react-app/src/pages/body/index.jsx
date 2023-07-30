import AllPlace from "../days/all-days";
import TommorowPlace from "../days/tommorow-day/tommorow_day";
import MainPlace from "../days/main-day/main_day";
import { useSelector, useDispatch } from "react-redux";
import SettingsPlace from "../modal-windows/settings_modal/SettingsPlace";
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
