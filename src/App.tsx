import { message } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./Interfaces";
import { TodoList } from "./components/TodoList";
import { DeadLineInput } from "./components/inputs/DeadLineInput";
import { TaskNameInput } from "./components/inputs/TaskNameInput";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [isTaskDone, setIsTaskDone] = useState<boolean>();
  const [deadLine, setdeadLine] = useState<number>();
  //
  const [taskClass, setTaskClass] = useState<string>("");
  const [deadLineClass, setDeadLineClass] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTaskName(event.target.value);
    } else if (event.target.name === "date") {
      setdeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    if (taskName && deadLine) {
      const newTodo: Todo = {
        todo_taskName: taskName,
        todo_deadline: deadLine,
        is_task_done: isTaskDone,
      };
      setTodos([...todos, newTodo]);
      setTaskName("");
      setdeadLine(0);
    }
    // frontend validation of the fields
    if (!taskName && !deadLine) {
      message.warning(`Please, fill both of the fields above !`, 1);
    }
    if (!taskName && deadLine) {
      message.warning(`Please, give your task a name !`, 1);
    }
    if (taskName && !deadLine) {
      message.warning(`Please, give your task a deadline !`, 1);
    }

    if (!taskName) {
      setTaskClass(`no_task_name_entered`);
    } else {
      setTaskClass(``);
    }
    if (!deadLine) {
      setDeadLineClass(`no_task_deadline_entered`);
    } else {
      setDeadLineClass("");
    }
  };

  const deleteTask = (todo_name_to_be_deleted: string): void => {
    let newTodosList: Todo[] = todos.filter((todo) => {
      let isDeleted: boolean = todo.todo_taskName != todo_name_to_be_deleted;
      return isDeleted;
    });
    setTodos(newTodosList);
  };

  // making sure the todo list is empty.
  //when the app first loads
  useEffect(() => {
    setTodos([]);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div
          className={taskName ? "inputContainer user_typing" : "inputContainer"}
        >
          <TaskNameInput
            {...{ handleInputChange, taskClass, taskName }}
          ></TaskNameInput>
          <DeadLineInput {...{ deadLine, deadLineClass, handleInputChange }} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        <TodoList
          {...{ isTaskDone, setIsTaskDone }}
          todos={todos}
          completeTask={deleteTask}
        ></TodoList>
      </div>
    </div>
  );
};

export default App;
