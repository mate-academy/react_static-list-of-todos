import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ name, title, completed, id }) => (
  <li className={String(completed)} key={id}>
    <h3>
      {name}
    </h3>
    <p>
      {title}
    </p>
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,

};

export default TodoItem;
