import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo({ item }) {
  return (
    <li>
      <User user={item.user} />
      <p>
        <strong>What to do: </strong>
        {item.title}
      </p>
      <p>
        <strong>Complite: </strong>
        {(item.completed) ? 'Yes' : 'No'}
      </p>
    </li>
  );
}

Todo.propTypes = { item: PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired };

export default Todo;
