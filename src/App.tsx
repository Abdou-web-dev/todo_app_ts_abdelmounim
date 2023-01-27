import { ChangeEvent, useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

import { Todo } from "./Interfaces";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = (): void => {
    if (task) {
      const newTask: Todo = {
        taskName: task,
      };
      setTodos([...todos, newTask]);
      setTask("");
    }
  };

  const completeTask = (taskNameToDelete: string): void => {
    let newTodos = todos.filter((task) => {
      return task.taskName != taskNameToDelete;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="header">
        <div className={task ? "inputContainer user_typing" : "inputContainer"}>
          <input
            type="text"
            placeholder="Add a task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        <TodoList todos={todos} completeTask={completeTask}></TodoList>
      </div>
    </div>
  );
};

export default App;
