import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div className="todos_block">
      { props.todos.map(t => <TodoItem todos={t} />)}
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
};
export default TodoList;
