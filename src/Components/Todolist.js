/* eslint-disable */
import React from 'react';
import Todoitem from './Todoitem';

const Todolist = ({ todos }) => (  // eslint-disable-line
  <>
    {todos.map(todo => (
      <Todoitem todo={todo} key={todo.id} />
    ))}
  </>
);

export default Todolist;
