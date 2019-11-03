import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ item }) => (
  <td className="todo__cell todo__cell_item">{item}</td>
);

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default TodoItem;
