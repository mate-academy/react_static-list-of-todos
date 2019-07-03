import React from 'react';
import propTypes from 'prop-types';

const TodoItem = props => (
  <div className="todo-item__info">
    <label htmlFor={props.item.id}>
      <input
        id={props.item.id}
        type="checkbox"
        checked={props.item.completed ? 'checked' : false}
        className="todo-item__completed"
      />
    </label>
    <h3>{props.item.title}</h3>
  </div>
);

TodoItem.propTypes = {
  item: propTypes.shape({
    completed: propTypes.bool,
    title: propTypes.string,
    id: propTypes.number,
  }).isRequired,
};

export default TodoItem;
