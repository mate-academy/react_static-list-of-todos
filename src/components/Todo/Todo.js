import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

function checkStatus(status) {
  if (status) {
    return (
      <span role="img" aria-label="done">
        &#9989;
      </span>
    );
  }

  return (
    <span role="img" aria-label="notDone">
      &#10060;
    </span>
  );
}

export const Todo = ({ title, completed, user }) => (
  <>
    <User name={user.name} />
    <span className="title">{title}</span>
    <span>
      Status:
      {' '}
      {checkStatus(completed)}
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
