import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ item }) {
  return (
    <div>
      <span>
        Title:
        {item.title}
      </span>
      <input
        defaultChecked={item.completed}
        type="checkbox"
      />
    </div>
  );
}
TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
export default TodoItem;
