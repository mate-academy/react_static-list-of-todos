import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { Complited } from '../Complited/Complited';

export function Todo({ todo }) {
  return (
    <>
      {todo.title}
      <p>
        <Complited is={todo.completed} />
      </p>
      <User userInfo={todo.user} />
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
