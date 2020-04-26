import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ title, completed, user }) => (
  <>
    <p className="todo__name"><User {...user} /></p>
    <p className="todo__task">
      Task:
      {title}
      .
    </p>
    <p className="todo__complete">
      Completed:
      {completed
        ? <p className="todo__done"> Done!</p>
        : <p className="todo__not"> Not yet...</p>}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Todo;
