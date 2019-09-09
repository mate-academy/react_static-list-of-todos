import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import User from '../User/User';

function TodoItem(props) {
  let classItem = 'list-group-item';

  if (props.todo.completed) {
    classItem = `${classItem} disabled`;
  }

  return (
    <li className={classItem}>
      <span className="li-task">Task:&nbsp;</span>
      {props.todo.title}
      &nbsp;|&nbsp;
      <User {...props.todo.user} />
    </li>
  );
}

export default TodoItem;

const shape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
});

TodoItem.propTypes = {
  todo: PropTypes.arrayOf(shape).isRequired,
};
