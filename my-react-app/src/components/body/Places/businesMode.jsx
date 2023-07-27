import GoBackComp from "../components/GoBack";

function BusinessMode(props) {
  const { filtredTasks, setBusinesMode } = props;

  function GoBack() {
    setBusinesMode(false);
  }
  return (
    <div className="BusinesMode">
      Данный блок находится в разработке.
      <GoBackComp isS={true} GoBack={GoBack}></GoBackComp>
    </div>
  );
}
export default BusinessMode;
