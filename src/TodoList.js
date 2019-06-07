import React from 'react';
import TodoItem from "./TodoItem.js"
import User from "./User.js"

function TodoList(props) {
  return (
  <>
    {props.todoList.map((value, index) => {
      return (
      <tr>
       <TodoItem todo={value} />
       <User user={props.userList[props.userList.findIndex((user) => user.id === value.userId)]}/>
      </tr>
      );
    })}
  </>
  );
}

export default TodoList;
