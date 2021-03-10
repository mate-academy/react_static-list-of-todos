import React from 'react';
import PropTypes from 'prop-types';
import './TodosItem.scss';
import { UserType } from '../../types';

export const TodosItem = ({ todo }) => (
  <>
    <i>{todo.title}</i>
    <p>{todo.completed ? 'done' : 'to do'}</p>
    <strong>{todo.user.name}</strong>
  </>
);

TodosItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: UserType,
  }),
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
