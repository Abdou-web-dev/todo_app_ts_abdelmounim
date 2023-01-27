import { Todo } from "../Interfaces";
import TodoTask from "./TodoTask";

interface TodoListProps {
  todos: Todo[];
  completeTask(taskNameToDelete: string): void;
}

export const TodoList = ({ todos, completeTask }: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((task: Todo, index: number) => {
        return <TodoTask key={index} completeTask={completeTask} task={task} />;
      })}
    </div>
  );
};
