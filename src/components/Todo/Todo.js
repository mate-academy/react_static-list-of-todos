import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

function Todo({ elem }) {
  return (
    <>
      <h4 className="title">{`${elem.id}. ${elem.title}`}</h4>
      {elem.completed
        ? (<span className="complete">done</span>)
        : (<span className="incomplete">not done</span>)
      }
    </>
  );
}

Todo.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;
