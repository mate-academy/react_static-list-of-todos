import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function TodoItem({ todo: todoElement }) {
  return (
    <tr>
      <td>{todoElement.title}</td>
      <td>{<User user={todoElement.user} />}</td>
      <td>{`${todoElement.completed}`}</td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
};

export default TodoItem;
