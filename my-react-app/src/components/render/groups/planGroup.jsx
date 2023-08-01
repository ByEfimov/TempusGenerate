import TaskRender from "../TaskRender";
import { searchSelect } from "../../../utils/seachSelectTask";
import { useSelector } from "react-redux";

export default function GroupPlan(props) {
  const { date } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);

  const ArrayPlans = [];
  UserTasks.map((task) =>
    searchSelect(task, date()) ? ArrayPlans.push(task) : ""
  );

  return (
    <>
      {UserTasks.some((task) => task.TaskSatus == "Plan") &&
      ArrayPlans.length > 0 ? (
        <div className="group">
          <div className="title">Планы</div>
          <div className="tasks">
            {ArrayPlans.map((task) => (
              <TaskRender
                itsPlan={true}
                task={task}
                Day={"План"}
                date={date()}
                key={task.planId}
              ></TaskRender>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
