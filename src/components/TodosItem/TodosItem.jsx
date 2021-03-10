import React from 'react';
import PropTypes from 'prop-types';
import './TodosItem.scss';
import { UserType } from '../../types';

export const TodosItem = ({ title, completed, user }) => (
  <>
    <i>{title}</i>
    <p>{completed ? 'done' : 'to do'}</p>
    <strong>{user.name}</strong>
  </>
);

TodosItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserType,
};

TodosItem.defaultProps = {
  user: {
    phone: null,
    username: null,
    website: null,
    company: null,
  },
};
