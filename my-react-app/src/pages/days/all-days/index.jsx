import { createRef, useState } from "react";
import SelectDay from "../select-day/select_day";
import { thisDay } from "../../../utils/time";
import { useSelector } from "react-redux";
import Statistic from "../../../components/statistic/statistic-router";

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
  const allBody = createRef();

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
      allBody.current.style.cssText = "animation: AllDell 300ms forwards;";
      setTimeout(() => {
        setClickDay(result);
        setOpenSelect(true);
      }, 200);
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
          allBody={allBody}
          setBusinesModeOpen={setBusinesModeOpen}
          setFiltredTasks={setFiltredTasks}
          setOpenSelect={setOpenSelect}
          clickDay={clickDay}
          setSelectTilte={setSelectTilte}
        ></SelectDay>
      ) : (
        ""
      )}
      <div className="allBody" ref={allBody}>
        <div className="callendar">{showDaysOnMounth()}</div>

        {UserTasks.length > 0 ? (
          <Statistic showDaysOnMounth={showDaysOnMounth}></Statistic>
        ) : (
          ""
        )}
        <div className="settings-button" onClick={openSettings}>
          Открыть настройки
        </div>
      </div>
    </section>
  );
}
export default AllPlace;
