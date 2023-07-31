import { thisDay } from "./time";
import moment from "moment";

export function showDaysOnMounth() {
  function GetDaysOnMounth() {
    const daysInCurrentMonth = moment().daysInMonth();
    return daysInCurrentMonth;
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
