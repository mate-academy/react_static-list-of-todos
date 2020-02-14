import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

function Todo(props) {
  const { id, title, completed, user } = props;

  return (
    <>
      <td>{id}</td>
      <User user={user} />
      <td>{title}</td>
      <td>{`${completed}`}</td>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Todo;
