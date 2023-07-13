function TommorowPlace(props) {
  const { UserData } = props;
  console.log(UserData[0].userTasksTommorow);
  return (
    <>
      <section className="Tomorrow-place place">
        {UserData[0].userTasksTommorow[0] ? (
          ""
        ) : (
          <div className="noHaveTasks">
            <div className="noHaveTasks-body">
              <div className="title">Здесь еще нет задачь</div>
              <button className="addtask">Создать задачу</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
export default TommorowPlace;
