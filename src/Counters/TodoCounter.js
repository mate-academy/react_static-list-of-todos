import React from 'react';
import PropTypes from 'prop-types';

function TodoCounter({ todos }) {
  return (
    <p>
      <button type="button" className="btn btn-primary">
        <span className="mr-2">Todos</span>
        <span className="badge badge-light">
          {todos.length}
        </span>
      </button>
    </p>
  );
}

TodoCounter.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoCounter;
