import { Todo } from "../Interfaces";
import "./styles.css";

interface TodoProps {
  task: Todo;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: TodoProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
