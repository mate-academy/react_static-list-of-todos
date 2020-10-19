import React from 'react';
import { todoShapes } from '../../api/preparedTodosShapes';

const Todo = ({ todo }) => (
  <>
    <td>{ `${todo.completed}` }</td>
    <td>{ todo.title }</td>
  </>
);

Todo.propTypes = {
  todo: todoShapes.isRequired,
};

export default Todo;
