import { useState } from "react";
import SelectDay from "./selectDay";
import { thisDay } from "../logic/time";

function AllPlace(props) {
  const { OpenAdd, setOpenAdd, setSelectTilte } = props;
  const [openSelect, setOpenSelect] = useState(false);
  const [clickDay, setClickDay] = useState("");

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

  return (
    <section className="All-place place" onClick={selectDay}>
      {openSelect ? (
        <SelectDay
          OpenAdd={OpenAdd}
          setOpenSelect={setOpenSelect}
          setClickDay={setClickDay}
          clickDay={clickDay}
          setSelectTilte={setSelectTilte}
          setOpenAdd={setOpenAdd}
        ></SelectDay>
      ) : (
        ""
      )}
      <div className="callendar">{showDaysOnMounth()}</div>
    </section>
  );
}
export default AllPlace;
