import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ id, title, completed }) => (
  <>
    <p className="id">{`ID: ${id}`}</p>
    <p className="title">{`TODO: ${title}`}</p>

    { completed
      ? <p className="solved">finished</p>
      : <p className="unsolved">unfinished</p> }
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
