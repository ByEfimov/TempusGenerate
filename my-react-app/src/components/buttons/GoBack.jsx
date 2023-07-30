import back from "../../assets/dark/back.svg";
import backL from "../../assets/light/back.svg";
import { useTheme } from "../../hooks/UseTheme";

export default function GoBackComp(props) {
  const { GoBack, isS } = props;
  const { theme } = useTheme();
  return isS ? (
    <div className="GoBack s bg" onClick={GoBack}>
      {theme === "LTempus" ? (
        <img src={backL} alt="" />
      ) : (
        <img src={back} alt="" />
      )}
    </div>
  ) : (
    <div className="GoBack bg" onClick={GoBack}>
      {theme === "LTempus" ? (
        <img src={backL} alt="" />
      ) : (
        <img src={back} alt="" />
      )}
    </div>
  );
}
