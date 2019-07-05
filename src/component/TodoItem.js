import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function TodoItem(props) {
  return (

    <div className="user_todo_block">
      <input type="checkbox" checked={props.todos.completed} />
      <p>{props.todos.title}</p>
    </div>

  );
}

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};

export default TodoItem;
