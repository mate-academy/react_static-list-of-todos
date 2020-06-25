import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './TodoItem.css';

const TodoItem = props => (
  <li>
    <div className="todo__item">
      <div>
        {
          props.completed
            ? (
              <span
                className="todo__status todo__status--completed"
              >
                Completed
              </span>
            ) : (
              <span className="todo__status">Uncompleted</span>
            )
        }
      </div>
      <div className="todo__title">{props.title}</div>
      <User {...props.user} />
    </div>
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
