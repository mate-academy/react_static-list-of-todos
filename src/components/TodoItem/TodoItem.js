import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

function TodoItem({ title, user, completed }) {
  return (
    <>
      <User user={user} />
      <p>
        <strong>  Task: </strong>
        {title}
        <strong>  Status: </strong>
        {completed ? 'Done' : 'In the process'}
      </p>
    </>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
