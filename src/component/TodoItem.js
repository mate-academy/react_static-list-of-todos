import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function TodoItem(props) {
  return (
    <div className="user_todo_block">
      <input type="checkbox" checked={props.todo.completed} />
      <p>{props.todo.title}</p>
    </div>

  );
}

const todoItemShape = PropTypes.shape({
  title: PropTypes.string,
  completed: PropTypes.bool,
});
TodoItem.propTypes = {
  todo: todoItemShape.isRequired,
};

export default TodoItem;
export { todoItemShape };
