import { useState } from "react";
import SelectDay from "./selectDayPlace";
import { thisDay } from "../logic/time";
import { useSelector } from "react-redux";
import Statistic from "../components/statistic/statistic-router";

function AllPlace(props) {
  const {
    setSelectTilte,
    setSettingOpen,
    setFiltredTasks,
    setBusinesModeOpen,
  } = props;
  const [openSelect, setOpenSelect] = useState(false);
  const [clickDay, setClickDay] = useState("");
  const UserTasks = useSelector((state) => state.user.userTasks);

  function showDaysOnMounth() {
    function GetDaysOnMounth() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return daysInMonth;
    }

    const rows = [];
    for (let i = 1; i < GetDaysOnMounth() + 1; i++) {
      if (i == thisDay) {
        rows.push(
          <div className="day color" key={i}>
            {i}
          </div>
        );
      } else {
        rows.push(
          <div className="day " key={i}>
            {i}
          </div>
        );
      }
    }
    return rows;
  }

  function selectDay(e) {
    if (e.target.classList.contains("day")) {
      let result = e.target.textContent;
      if (e.target.textContent < 11) {
        result = "0" + e.target.textContent;
      }
      setClickDay(result);
      setOpenSelect(true);
    }
  }

  function openSettings() {
    setSettingOpen(true);
    setSelectTilte("настройки");
  }

  return (
    <section className="All-place place" onClick={selectDay}>
      {openSelect ? (
        <SelectDay
          setBusinesModeOpen={setBusinesModeOpen}
          setFiltredTasks={setFiltredTasks}
          setOpenSelect={setOpenSelect}
          clickDay={clickDay}
          setSelectTilte={setSelectTilte}
        ></SelectDay>
      ) : (
        ""
      )}
      <div className="callendar">{showDaysOnMounth()}</div>

      {UserTasks.length > 0 ? (
        <Statistic showDaysOnMounth={showDaysOnMounth}></Statistic>
      ) : (
        ""
      )}
      <div className="settings-button" onClick={openSettings}>
        Открыть настройки
      </div>
    </section>
  );
}
export default AllPlace;
