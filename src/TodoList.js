import React from 'react';
import TodoItem from "./TodoItem.js"
import User from "./User.js"

function TodoList(props) {
  return (  
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Completed</th>
	      <th>Username</th>
	      <th>Email</th>
	      <th>Name</th>
      </tr>
      
    {props.todoList.map((value, index) => {
      return (
        <tr>
         <TodoItem todo={value} />
         <User user={props.userList[props.userList.findIndex((user) => user.id === value.userId)]}/>
        </tr>
      );
    })}
  
    </table>
  );
}

export default TodoList;
