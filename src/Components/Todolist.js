import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from './Todoitem';

const Todolist = ({ todos }) => (
  <>
    {todos.map(todo => (
      <Todoitem todo={todo} key={todo.id} />
    ))}
  </>
);

Todolist.propTypes = { todos: PropTypes.objectOf(PropTypes) };
Todolist.defaultProps = { todos: 'no todos' };

export default Todolist;
