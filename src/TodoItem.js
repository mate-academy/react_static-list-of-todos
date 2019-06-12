import React from 'react';

function TodoItem(props) {
  return (
    <>
      <td>
        {props.todo.id}
      </td>
      <td>
        {props.todo.title}
      </td>
      <td>
        {props.todo.completed.toString()}
      </td>
    </>
  );
}

export default TodoItem ;
