import React from 'react';
import Todo from '../Todo/Todo';

function todoList({ array }) {
  return array.map(todo => <Todo {...todo} />);
}

export default todoList;
