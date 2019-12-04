import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ item }) => (
  <>
    <User user={item.user} />
    <li>
      {'todo - '}
      {item.title}
    </li>
    <li>
      {'id - '}
      {item.id}
    </li>
    <li>{ item.completed ? 'completed' : 'no completed' }</li>
    <br />
  </>
);

TodoItem.propTypes = { item: PropTypes.string.isRequired };

export default TodoItem;
