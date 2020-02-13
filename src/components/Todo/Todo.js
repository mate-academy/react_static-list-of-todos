import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

export const Todo = ({ itemID, title, completed }) => (
  <>
    <td className="todo-td">{itemID}</td>
    <td className="todo-td">
      {title}
      {' '}
      <span>{completed ? 'Yes' : 'No'}</span>
    </td>
    <td className="todo-td">{completed ? 'Yes' : 'No'}</td>
  </>
);

Todo.propTypes = {
  completed: PropTypes.bool,
  title: PropTypes.string,
  itemID: PropTypes.number,
};

Todo.defaultProps = {
  completed: false,
  title: '',
  itemID: 0,
};
