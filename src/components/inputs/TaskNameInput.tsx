import { ChangeEvent } from "react";
import "./input_styles.scss";

type TaskNameInputProps = {
  taskClass: string;
  taskName: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function TaskNameInput({
  taskClass,
  taskName,
  handleInputChange,
}: TaskNameInputProps) {
  return (
    <>
      <input
        className={`task_name_input ${taskClass}`}
        type="text"
        placeholder="Add a task..."
        name="task"
        value={taskName}
        onChange={handleInputChange}
      />
    </>
  );
}
