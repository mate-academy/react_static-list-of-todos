import React from 'react';
import PropTypes from 'prop-types';
import { typesValidation } from '../../typesValidation';
import { Todo } from '../Todo';
import './todoList.scss';

export const TodoList = ({ tasks }) => (
  <>
    {tasks.map(task => (
      <div className="task" key={task.id}>
        <Todo {...task} />
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(typesValidation).isRequired,
};
