import React from 'react';
import { Todo } from '../Todo/Todo';
import { ShapeTodo } from '../Shapes';

export const TodoList = ({ todos }) => (
  <ul className="container">
    {todos.map(item => (
      <li className="item">
        <p>
          {item.title}
        </p>
        <Todo todo={item} key={item.id} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: ShapeTodo.isRequired,
};
