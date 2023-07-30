function AddPlanButton(props) {
  const { setOpenPlan } = props;
  function OpenAdd() {
    setOpenPlan(true);
  }
  return <div className="AddPlanButton" onClick={OpenAdd}></div>;
}

export default AddPlanButton;
