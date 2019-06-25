import React from "react";
import User from "../components/User";
import { users } from "../data/users";

function TodoItem(props) {
  const user = users.find(user => user.id === props.userId).name;
  return (
    <tr className={props.completed ? "completed" : "notCompleted"} key={props.title}>
      <td>{props.title}</td>
      {User(user)}
      <td>{`${props.completed}`}</td>
    </tr>
  );
}

export default TodoItem;
