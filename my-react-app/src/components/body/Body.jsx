import AllPlace from "./Places/AllPlace";
import TommorowPlace from "./Places/TommorowPlace";
import MainPlace from "./Places/MainPlace";
import { useSelector, useDispatch } from "react-redux";

export let UsersData;
export let DellDispatch;

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

  const dispatch = useDispatch();

  const UserTasks = useSelector((state) => state.user.userTasks);
  UsersData = UserTasks;
  DellDispatch = dispatch;
  return (
    <section className="body">
      <AllPlace
        OpenAdd={OpenAddAll}
        setOpenAdd={setOpenAddAll}
        setSelectTilte={setSelectTilte}
      ></AllPlace>
      <MainPlace
        OpenAdd={OpenAddToDay}
        setOpenAdd={setOpenAddToDay}
      ></MainPlace>
      <TommorowPlace
        OpenAdd={OpenAddTommorow}
        setOpenAdd={setOpenAddTommorow}
      ></TommorowPlace>
    </section>
  );
}
export default Body;
