import React from 'react';
import PropTypes from 'prop-types';
import users from '../api/users';
// import { todoShape } from './variables';

export const Todo = (
  { userId, title, completed },
) => {
  const manager = users.filter(user => user.id === userId)[0];

  return (
    <>
      <div className="card-body">
        <p className="card-text">
          Task Description:
          <br />
          {title}
        </p>
        <h5 className="card-title">{manager.company.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Manager:
          {manager.name}
        </h6>
        <a href={`tel: ${manager.phone}`} className="card-link">Call</a>
        <a href={`mailto: ${manager.email}`} className="card-link">Email</a>
        <a
          href={manager.website}
          className="card-link"
        >
          Company site
        </a>
      </div>
      <button
        type="button"
        className={`btn btn-${completed ? 'success' : 'danger'}`}
      >
        {`${completed ? 'Done!' : 'In progress'}`}
      </button>
    </>
  );
};

Todo.propTypes = {
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
