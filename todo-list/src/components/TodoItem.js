import React from 'react';
import User from "./User";

function TodoItem(props) {
  return (
    <tr>
      <td>{props.item}</td>
      <User username={props.username}/>
    </tr>
  );
}

export default TodoItem;
