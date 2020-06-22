import React from 'react';
import PropTypes, { string, number, bool } from 'prop-types';

const Todo = ({ todo }) => (
  <>
    <td>{ `${todo.completed}` }</td>
    <td>{ todo.title }</td>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: string,
    userId: number,
    id: number,
    completed: bool,
  }).isRequired,
};

export default Todo;
