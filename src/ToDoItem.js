import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

function ToDoItem(props) {
  return (
    <div className="todos-item">
      <h2>TODOS</h2>
      <p>ID:{props.item.id}</p>
      <p>Title:{props.item.title}</p>
      <p>
        Completed:
        <input type="checkbox" defaultChecked={props.item.completed} />
      </p>
      <User user={props.user} />
    </div>
  );
}

ToDoItem.propTypes = {
  item: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToDoItem;
