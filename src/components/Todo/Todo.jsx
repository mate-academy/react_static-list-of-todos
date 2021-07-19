import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export function Todo({ title, status, userId }) {
  return (
    <>
      <h2 className="card__title">{title}</h2>
      <p>{status}</p>
      <User id={userId} />
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string,
  userId: PropTypes.number.isRequired,
};

Todo.defaultProps = {
  status: `Status: in progress`,
};
