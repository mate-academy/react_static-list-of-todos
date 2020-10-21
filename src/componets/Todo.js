import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import User from './User';

function Todo({ todo: { title, completed, user } }) {
  return (
    <>
      <ListGroupItem className="my-3 bg-dark text-light">
        <p className="text-center">
          {title}
        </p>

        {completed
          ? <p className="todo__completed">Done</p>
          : <p className="todo__completed--not">Not done</p>}

        <User user={user} />
      </ListGroupItem>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default Todo;
