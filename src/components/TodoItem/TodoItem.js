import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  return (
    <>
      <p>
        <strong>  User: </strong>
        {props.user.name}
        <strong>  Task: </strong>
        {props.title}
        <strong>  Status: </strong>
        {props.completed ? 'Done' : 'In the process'}
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
