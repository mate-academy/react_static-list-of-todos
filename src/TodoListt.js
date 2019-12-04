import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoListt({ todosUsers }) {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <ul className="App__ul">
        {todosUsers.map(todo => (<TodoItem item={todo} />))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line max-len
TodoListt.propTypes = { todosUsers: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TodoListt;
