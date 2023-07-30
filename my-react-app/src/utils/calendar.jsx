import { thisDay } from "./time";

export function showDaysOnMounth() {
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
