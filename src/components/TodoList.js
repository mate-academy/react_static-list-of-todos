import React from 'react';
import Todo from './Todo';
import TodoShape from './propTypesTodoShape/TodoShape';

const TodoList = ({ todoList }) => (
  <ul className="list">
    {todoList.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = TodoShape;

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;
