import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './TodoListItem.scss';

const TodoListItem = ({ name, title, status }) => {
  const isCompleted = (stat) => {
    if (stat) {
      return (
        <p className="complete">
          Completed:
          {' '}
          {'Yes'}
        </p>
      );
    }

    return (
      <p className="noComplete">
        Completed:
        {' '}
        {'No'}
      </p>
    );
  };

  return (
    <li className="list__item">
      <div>
        <User name={name} />
        <p className="title">
          ToDo:
          {' '}
          {title}
        </p>
        {isCompleted(status)}
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default TodoListItem;
