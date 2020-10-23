import React from 'react';
import Todo from './Todo';
import propTypeTodoShape from './propTypesTodoShape/propTypeTodoListShape';

const TodoList = ({ todoList }) => (
  <ul className="list">
    {todoList.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = propTypeTodoShape;

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;
