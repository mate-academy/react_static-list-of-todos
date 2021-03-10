import React from 'react';
import './TodosItem.scss';
import { TodoType } from '../../types';

export const TodosItem = ({ todo }) => (
  <>
    <i>{todo.title}</i>
    <p>{todo.completed ? 'done' : 'to do'}</p>
    <strong>{todo.user.name}</strong>
  </>
);

TodosItem.propTypes = {
  todo: TodoType,
};

TodosItem.defaultProps = {
  todo: {
    user: {
      phone: null,
      username: null,
      website: null,
      company: null,
    },
  },
};
