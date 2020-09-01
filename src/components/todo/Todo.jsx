import React from 'react';
import PropTypes from 'prop-types';
import '../todo/Todo.css';
import User from '../user/User';

function Todo({id, title, completed, user}) {
  return (
    <>
      <span>{id}</span>
      <User {...user}/>
      <p className="user__task">
        {title}
      </p>
      <p className="user__status">
        {completed ? `Done` : `In process`}
      </p>
    </>
  );
}

export default Todo;

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

