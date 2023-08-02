import TaskRender from "../TaskRender";

export default function DoneGroup(props) {
  const { sorting, setModalRenameOpen, setModalDellateOpen } = props;
  return (
    <>
      {sorting.some((task) => task.TaskSatus === "Done") ? (
        <div className="group">
          <div className="title">Выполнено</div>
          <div className="tasks">
            {sorting.map((task) => {
              if (task.TaskSatus == "Done") {
                return (
                  <TaskRender
                    setModalDellateOpen={setModalDellateOpen}
                    setModalRenameOpen={setModalRenameOpen}
                    task={task}
                    key={task.id}
                  ></TaskRender>
                );
              }
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
