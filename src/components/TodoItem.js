import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import './Todoitem.css';

const TodoItem = ({ todo }) => {
  const { title, completed, userCatalog } = todo;

  return (
    <li className={completed ? 'todo__item todo__item--true' : 'todo__item'}>
      <h2 className="todo__title">
        {title}
      </h2>
      <User name={userCatalog.name} />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    userCatalog: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TodoItem;
