import React from 'react';
import PropTypes from 'prop-types';
import TodoItem, { todoItemShape } from './TodoItem';

function TodoList(props) {
  return (
    <div className="todos_block">
      { props.todos.map(t => <TodoItem key={t.id} todo={t} />)}
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoItemShape).isRequired,
};
export default TodoList;
