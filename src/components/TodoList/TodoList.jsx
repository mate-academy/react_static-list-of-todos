import React from 'react';
import PropTypes from 'prop-types';
import { TodoType } from '../types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todoList }) => (
  (
    <>
      {todoList.map(item => (
        <li
          key={item.id}
          className="list__item item"

        >
          <Todo
            user={item.user}
            title={item.title}
            completed={item.completed}
          />
        </li>
      ))}
    </>
  )
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(TodoType).isRequired,
};
