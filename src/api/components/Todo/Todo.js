import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

function Todo({ user, title, completed }) {
  const completion = completed
    ? <p className="list__item-completion"> Already done </p>
    : <p className="list__item-completion-none"> Not completed </p>;

  return (
    <>
      <User {...user} />
      {completion}
      <p className="list__item-title">
        {title}
      </p>
    </>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Todo;
