import { useState } from "react";
import SelectDay from "./selectDay";

function AllPlace(props) {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const { UserData, setSelectTilte } = props;
  const key = "TaskPriority";
  const sortedTasks = UserData[0].userTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  );
  const [openSelect, setOpenSelect] = useState(false);
  const [selectTaks, setSelectTaks] = useState([]);

  function GetDaysOnMounth() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  }

  const rows = [];
  for (let i = 1; i < GetDaysOnMounth() + 1; i++) {
    if (i == day) {
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

  function selectDate(day) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  function selectDay(e) {
    if (e.target.classList.contains("day")) {
      const sortedTasks2 = sortedTasks.filter(
        (user) => user.date === selectDate(e.target.textContent)
      );
      setSelectTilte(selectDate(e.target.textContent));
      setSelectTaks(sortedTasks2);
      setOpenSelect(true);
    }
  }

  return (
    <section className="All-place place" onClick={selectDay}>
      {openSelect ? (
        <SelectDay
          selectTaks={selectTaks}
          setOpenSelect={setOpenSelect}
        ></SelectDay>
      ) : (
        <div className="callendar">{rows}</div>
      )}
    </section>
  );
}
export default AllPlace;
