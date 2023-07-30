import themeappleicon from "../../../assets/theme-apple-icon.svg";
import themetempusicon from "../../../assets/theme-tempus-icon.svg";
import themestasicon from "../../../assets/theme-stas-icon.svg";
import themestempusLicon from "../../../assets/theme-tempusL-icon.svg";
import { createRef } from "react";
import { useTheme } from "../../../hooks/UseTheme";
import GoBackComp from "../../../components/buttons/GoBack";

function SettingsPlace(props) {
  const { setSettingOpen, setSelectTilte } = props;
  const settings = createRef();
  function GoBack() {
    settings.current.style.cssText = "animation: SettingsDell 500ms forwards;";
    setSelectTilte("Все дни");
    setTimeout(() => {
      setSettingOpen(false);
    }, 500);
  }
  const { theme, setTheme } = useTheme();
  const imageApple = createRef();
  const imageTempus = createRef();
  const imageStas = createRef();
  const imageLTempus = createRef();

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
      if (e.target.classList[1] == "tempusL") {
        e.target.children[0].classList.add("select");
        setTheme("LTempus");
      }
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }

  return (
    <div className="settings place" ref={settings}>
      <div className="settings-theme">
        <div className="title">Настройка темы</div>
        <div className="themes" onClick={HeandlerSelectTheme}>
          <div className="theme apple">
            <img
              rel="preload"
              className={theme == "Apple" ? "select" : ""}
              ref={imageApple}
              src={themeappleicon}
              alt=""
            />
          </div>
          <div className="theme tempus">
            <img
              rel="preload"
              className={theme == "Tempus" ? "select" : ""}
              ref={imageTempus}
              src={themetempusicon}
              alt=""
            />
          </div>
          <div className="theme stas">
            <img
              rel="preload"
              ref={imageStas}
              className={theme == "Stas" ? "select" : ""}
              src={themestasicon}
              alt=""
            />
          </div>
          <div className="theme tempusL">
            <img
              rel="preload"
              ref={imageLTempus}
              className={theme == "LTempus" ? "select" : ""}
              src={themestempusLicon}
              alt=""
            />
          </div>
        </div>
      </div>

      <a className="helper" href="https://t.me/NikitaEfimovv">
        Открыть чат поддержки
      </a>
      <GoBackComp isS={true} GoBack={GoBack}></GoBackComp>
    </div>
  );
}
export default SettingsPlace;
