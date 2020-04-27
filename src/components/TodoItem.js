import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ title, completed, user }) => (
  <li className={
    completed
      ? 'todo_item todo_item-done'
      : 'todo_item'
  }
  >
    <User {...user} />
    <div>
      <span className="todo_title-text">
        Todos: &nbsp;
      </span>
      {title}
    </div>
    <div className="todo_status">
      {completed
        ? 'True'
        : 'False'}
    </div>
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default TodoItem;
