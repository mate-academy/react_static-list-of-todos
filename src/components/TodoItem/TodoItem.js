import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

function TodoItem({ todo }) {
  const {
    title, completed, user, id,
  } = todo;

  // console.log(todo);

  return (
    <div className="todoList__item">
      <h2>{id}</h2>
      <h4>{title}</h4>
      <input type="checkbox" checked={completed} />
      <User user={user} />
      <p>--------------------------------------</p>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.object,
  }).isRequired,
};

export default TodoItem;
