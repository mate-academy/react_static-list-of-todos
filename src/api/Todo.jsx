import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';
import User from './User';

function Todo({ user }) {
  return (
    <>
      <span className={user.completed ? 'done' : 'didNotDone'}>
        {user.completed ? 'COMPLETE ' : 'DID NOT COMPLETE '}
      </span>

      <span>
        {user.title}
      </span>

      <User people={user.person} />
    </>
  );
}

Todo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    person: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,

      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,

        geo: PropTypes.shape({
          lat: PropTypes.string.isRequired,
          lng: PropTypes.string.isRequired,
        }),

        company: PropTypes.shape({
          name: PropTypes.string.isRequired,
          catchPhrase: PropTypes.string.isRequired,
          bs: PropTypes.string.isRequired,
        }),

      }).isRequired,

    }).isRequired,
  }).isRequired,
};

export default Todo;
