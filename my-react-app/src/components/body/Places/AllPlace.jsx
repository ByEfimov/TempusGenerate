function AllPlace() {
  function GetDaysOnMounth() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  }

  const rows = [];
  for (let i = 1; i < GetDaysOnMounth() + 1; i++) {
    rows.push(
      <div className="day" key={i}>
        {i}
      </div>
    );
  }

  return (
    <section className="All-place place">
      <div className="callendar">{rows}</div>
    </section>
  );
}
export default AllPlace;
