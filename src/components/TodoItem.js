import React from "react";
import User from "../components/User";

function TodoItem(props) {
  return (
    <tr className={props.completed ? "completed" : "notCompleted"}>
      <td>{props.title}</td>
      <User name={props.name} />
      <td>{`${props.completed}`}</td>
    </tr>
  );
}

export default TodoItem;
