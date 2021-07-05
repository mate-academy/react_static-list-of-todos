import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <p>{title}</p>
    {checkStatus(completed)}
    <User {...user} />
  </>
);

function checkStatus(status) {
  if (status) {
    return <p style={{ color: '#3DCA79' }}>Completed</p>;
  }

  return <p style={{ color: '#FB4B3B' }}>In progress</p>;
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
