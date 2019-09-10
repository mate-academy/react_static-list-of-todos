import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList(props) {
  const { todos, users } = props;

  return (
    <div className="todos-list">
      {todos.map((todo) => {
        const todoUser = users.find(user => user.id === todo.userId);

        return (
          <TodoItem todo={todo} user={todoUser} />
        );
      })}
    </div>
  );
}

export default TodoList;
