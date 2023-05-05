import { Todo } from "../Interfaces";
import TodoTask from "./TodoTask";
import "./styles.scss";

interface TodoListProps {
  todos: Todo[];
  completeTask(taskNameToDelete: string): void;
  isTaskDone: boolean | any;
  setIsTaskDone: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const TodoList = ({
  todos,
  completeTask,
  isTaskDone,
  setIsTaskDone,
}: TodoListProps) => {
  return (
    <div className="todo-list-container">
      {todos.map((todo: Todo, index: number) => {
        return (
          <TodoTask
            {...{ isTaskDone, setIsTaskDone }}
            key={index}
            completeTask={completeTask}
            todo={todo}
          />
        );
      })}
    </div>
  );
};
