import React from 'react';
import Todoitem from '../Todoitem/Todoitem';
import './todolist.css';

function Todolist( { todos, users }) {
  return (
    <div className="todo_list">
      {todos.map((todo) => {
        const userTodo = users.find(user => user.id === todo.userId);
        return (
          <Todoitem todo={todo} userTodo={userTodo} key={userTodo.id} />
        );
      })
      }
    </div>
  );
}

export default Todolist;
