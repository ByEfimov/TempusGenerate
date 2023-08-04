import { createRef, useState } from "react";
import SelectDay from "../select-day/select_day";
import { showDaysOnMounth } from "../../../utils/calendar";
import { Animate } from "../../../assets/animations";

function AllPlace(props) {
  const {
    setSelectTilte,
    setSettingOpen,
    setFiltredTasks,
    setBusinesModeOpen,
  } = props;
  const [openSelect, setOpenSelect] = useState(false);
  const [clickDay, setClickDay] = useState("");
  const allBody = createRef();

  function selectDay(e) {
    if (e.target.classList.contains("day")) {
      let result = e.target.textContent;
      if (e.target.textContent < 10) {
        result = "0" + e.target.textContent;
      }
      Animate(allBody.current, "AllDell", "300");
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

        <div className="settings-button" onClick={openSettings}>
          Открыть настройки
        </div>
      </div>
    </section>
  );
}
export default AllPlace;
