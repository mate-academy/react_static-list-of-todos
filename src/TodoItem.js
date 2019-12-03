import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.completed ? 'Yes' : 'No'}</td>
    <User user={item.user} />
  </tr>
);

TodoItem.propTypes = { item: PropTypes.objectOf(PropTypes.any).isRequired };

export default TodoItem;
