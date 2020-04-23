import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

const Todo = ({ userInfo: { title, completed, user } }) => (
  <>
    <h4>
      Title:
      {' '}
      {title}
    </h4>
    {completed ? <p>Status: completed</p> : <p>Status: not completed</p>}
    <User userPersonalInfo={user} />
  </>
);

Todo.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.number.isRequired,
  })).isRequired,
};

export default Todo;
