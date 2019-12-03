import PropTypes from 'prop-types';
import React from 'react';
import User from './User';

let rowcolor = 'gray';

const TodoItem = ({ todo }) => {
  const status = (todo.completed) ? 'done' : 'in progress';

  rowcolor = (rowcolor === 'lightgray') ? 'lightgreen' : 'lightgray';

  return (
    <tr style={{ backgroundColor: rowcolor }}>
      <td style={{ width: '25%' }}>{todo.id}</td>
      <td style={{ width: '25%' }}>{todo.title}</td>
      <User user={todo.user} />
      <td style={{ width: '25%' }}>{status}</td>
    </tr>
  );
};

TodoItem.propTypes = { todo: PropTypes.objectOf(PropTypes.any).isRequired };

export default TodoItem;
