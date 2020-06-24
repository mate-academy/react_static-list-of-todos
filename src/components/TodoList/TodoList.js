import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

const TodoList = ({ todos }) => (
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
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { TodoList };
