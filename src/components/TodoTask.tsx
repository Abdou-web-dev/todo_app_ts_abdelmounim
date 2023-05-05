import { Button, Checkbox, Divider, Modal } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useEffect, useState } from "react";
import { Todo } from "../Interfaces";
import trash_icon from "../assets/img/trash.svg";
import { CloseX } from "./icons/Icons";
import { ModalContent } from "./modals/ModalContent";
import "./styles.scss";

interface TodoProps {
  todo: Todo;
  completeTask(taskNameToDelete: string): void;
  isTaskDone: boolean | any;
  setIsTaskDone: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const TodoTask = ({
  todo,
  completeTask,
  isTaskDone,
  setIsTaskDone,
}: TodoProps) => {
  const [checked, setChecked] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const handleCheckChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  function openModal() {
    setOpenDeleteModal(true);
  }

  useEffect(() => {
    // setIsTaskDone(true);
  }, []);

  useEffect(() => {
    //by default, isTaskDone is set to false
    if (isTaskDone) setChecked(true);
    else setChecked(false);
  }, [isTaskDone]);
  return (
    <>
      <form
        className={`${
          checked ? "form-checked-true" : "form-checked-false"
        } todo-task-form-container`}
      >
        <fieldset className="main-fieldset">
          <legend>{checked ? `Done` : `Not Done`}</legend>
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            className="main-checkbox"
          />
          {/* dfe */}
          <div className="single-todo-container">
            <div className="todo-infos">
              <span className="todo-name">{todo.todo_taskName}</span>
              <span className="todo-deadline">{todo.todo_deadline}</span>
              <Divider
                style={{ backgroundColor: "gray", height: "30px", width: "" }}
                type="vertical"
              ></Divider>
              <Button
                className="delete-btn"
                onClick={() => {
                  openModal();
                }}
              >
                <img src={trash_icon} alt="" />
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
      <>
        <Modal
          className="ant-edit-modal"
          open={openDeleteModal}
          maskClosable={true}
          closable={false}
          keyboard={true}
          mask={true}
          onOk={() => setOpenDeleteModal(false)}
          onCancel={() => setOpenDeleteModal(false)}
          width={"40%"}
          footer={null}
          title={
            <>
              <span>Are you sure you want to delete this task ?</span>
              <Button
                onClick={() => setOpenDeleteModal(false)}
                className="ant-edit-modal-close-btn"
              >
                <CloseX></CloseX>
              </Button>
            </>
          }
        >
          <ModalContent
            {...{ todo, completeTask, setOpenDeleteModal, openDeleteModal }}
          />
        </Modal>
        {/* completeTask(todo.todo_taskName); */}
      </>
    </>
  );
};

export default TodoTask;
