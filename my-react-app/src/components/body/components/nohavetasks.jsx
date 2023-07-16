function NoHaveTasks(props) {
  const { setOpenAdd } = props;
  function clickButtonAdd() {
    setOpenAdd(true);
  }
  return (
    <div className="noHaveTasks">
      <div className="noHaveTasks-body">
        <div className="title">Здесь еще нет задач</div>
        <button className="addtask" onClick={clickButtonAdd}>
          Создать задачу
        </button>
      </div>
    </div>
  );
}
export default NoHaveTasks;
