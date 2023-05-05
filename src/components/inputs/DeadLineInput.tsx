import { ChangeEvent } from "react";
import "./input_styles.scss";

type DeadLineInputProps = {
  deadLineClass: string;
  deadLine: number | any;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function DeadLineInput({
  deadLineClass,
  deadLine,
  handleInputChange,
}: DeadLineInputProps) {
  return (
    <>
      <input
        className={`deadline_input ${deadLineClass}`}
        type="number"
        placeholder="Add a deadline..."
        name="date"
        value={deadLine}
        onChange={handleInputChange}
      />
    </>
  );
}
