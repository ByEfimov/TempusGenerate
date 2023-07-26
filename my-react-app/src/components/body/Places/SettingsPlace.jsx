import themeappleicon from "../../../assets/theme-apple-icon.svg";
import themetempusicon from "../../../assets/theme-tempus-icon.svg";
import themestasicon from "../../../assets/theme-stas-icon.svg";
import { createRef } from "react";
import { useTheme } from "../../../hooks/UseTheme";

function SettingsPlace(props) {
  const { setSettingOpen, setSelectTilte } = props;
  function GoBack() {
    setSettingOpen(false);
    setSelectTilte("Все дни");
  }
  const { theme, setTheme } = useTheme();
  const imageApple = createRef();
  const imageTempus = createRef();
  const imageStas = createRef();

  function HeandlerSelectTheme(e) {
    if (e.target.classList.contains("theme")) {
      imageApple.current.removeAttribute("class");
      imageTempus.current.removeAttribute("class");
      imageStas.current.removeAttribute("class");
      if (e.target.classList[1] == "apple") {
        e.target.children[0].classList.add("select");
        setTheme("Apple");
      }
      if (e.target.classList[1] == "tempus") {
        e.target.children[0].classList.add("select");
        setTheme("Tempus");
      }
      if (e.target.classList[1] == "stas") {
        e.target.children[0].classList.add("select");
        setTheme("Stas");
      }
    }
  }

  return (
    <div className="settings place">
      <div className="settings-theme">
        <div className="title">Настройка темы</div>
        <div className="themes" onClick={HeandlerSelectTheme}>
          <div className="theme apple">
            <img
              className={theme == "Apple" ? "select" : ""}
              ref={imageApple}
              src={themeappleicon}
              alt=""
            />
          </div>
          <div className="theme tempus">
            <img
              className={theme == "Tempus" ? "select" : ""}
              ref={imageTempus}
              src={themetempusicon}
              alt=""
            />
          </div>
          <div className="theme stas">
            <img
              ref={imageStas}
              className={theme == "Stas" ? "select" : ""}
              src={themestasicon}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="GoBack s" onClick={GoBack}></div>
    </div>
  );
}
export default SettingsPlace;
