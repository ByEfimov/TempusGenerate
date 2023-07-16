function AddTask(props) {
  const { setSelectTilte, setOpenAdd } = props;

  function GoBack() {
    document.querySelector(".AddTask").style.cssText =
      "animation: 0.5s CloseAddTask forwards;";

    setTimeout(() => {
      setOpenAdd(false);
      console.log(document.querySelector(".AddTask"));
    }, 500);
  }

  return (
    <div className="AddTask">
      <div className="GoBack s" onClick={GoBack}>
        s
      </div>
    </div>
  );
}
export default AddTask;
