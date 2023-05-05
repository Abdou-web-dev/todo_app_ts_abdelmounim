import { Button } from "antd";
import { Todo } from "../../Interfaces";
import "./styles.scss";

interface ModalContProps {
  todo: Todo;
  completeTask(taskNameToDelete: string): void;
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  openDeleteModal: boolean;
}

export function ModalContent({
  completeTask: deleteTask,
  setOpenDeleteModal,
  todo,
  openDeleteModal,
}: ModalContProps) {
  return (
    <>
      <div className="modal-content-container">
        <Button
          className="delete-btn"
          onClick={() => {
            deleteTask(todo.todo_taskName);
            setOpenDeleteModal(false);
          }}
        >
          <span>Delete</span>
        </Button>
        <Button
          className="cancel-btn"
          onClick={() => {
            setOpenDeleteModal(false);
          }}
        >
          <span>Cancel</span>
        </Button>
      </div>
    </>
  );
}
