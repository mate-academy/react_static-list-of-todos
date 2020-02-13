import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

import Todo from '../Todo/Todo';
import User from '../User/User';

const TodoList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li className="card" key={item.id}>
        <Todo {...item} />
        <User {...item.user} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
