import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todoitem = ({ todo }) => {
  const completedStyle = () => {
    const { completed } = todo;

    return completed === false
      ? <span style={{ color: `red` }}>not completed</span>
      : <span style={{ color: `green` }}>completed</span>;
  };

  return (
    <div className="todo-item">
      <span>
        #:
        {todo.id}
      </span>
      <h4>
        TODOS:
        {todo.title}
        <br />
        STATUS:
        {completedStyle()}
      </h4>
      <User user={todo.user} />
    </div>
  );
};

Todoitem.propTypes = { todo: PropTypes.objectOf(PropTypes) };
Todoitem.defaultProps = {
  todo: {
    id: 'no id',
    title: 'no title',
  },
};

export default Todoitem;
