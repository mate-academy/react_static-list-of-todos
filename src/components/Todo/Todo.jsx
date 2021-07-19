import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export function Todo({ title, status, user }) {
  return (
    <>
      <h2 className="card__title">{title}</h2>
      <p>{status}</p>
      <User user={user} />
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

Todo.defaultProps = {
  status: `Status: in progress`,
};
