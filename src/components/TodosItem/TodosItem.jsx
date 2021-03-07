import React from 'react';
import PropTypes from 'prop-types';
import './TodosItem.scss';

export const TodosItem = ({ title, completed, user }) => (
  <>
    <i>{title}</i>
    <p>{completed ? ('done') : ('to do')}</p>
    <strong>{user.name}</strong>
  </>
);

TodosItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

TodosItem.defaultProps = {
  user: { name: 'Unknown' },
};
