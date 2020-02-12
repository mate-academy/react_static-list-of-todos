import React from 'react';
import PropTypes from 'prop-types';
import './todo.css';

const Todo = ({ id, title, completed }) => (
  <>
    <p className="title">{`${id} ${title}`}</p>
    {completed
      ? (<p className="completed">Yes</p>)
      : (<p className="notCompleted">No</p>)}
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
