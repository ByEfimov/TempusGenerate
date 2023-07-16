function AddButton(props) {
  const { setOpenAdd } = props;
  function clickButtonAdd() {
    setOpenAdd(true);
  }
  return (
    <div className="addButton" onClick={clickButtonAdd}>
      +
    </div>
  );
}

export default AddButton;
