import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

function ToDoItem({ item, user }) {
  return (
    <div className="todos-item">
      <h2>TODOS</h2>
      <p>ID:{item.id}</p>
      <p>Title:{item.title}</p>
      <p>
        Completed:
        <input type="checkbox" defaultChecked={item.completed} />
      </p>
      <User user={user} />
    </div>
  );
}

ToDoItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,

  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToDoItem;
