import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { User } from '../User/User';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <>
    <User {...user} />
    <p>
      <strong>I need to do:</strong>
      {' '}
      {title}
    </p>
    <p className={ClassNames('person__status', { active: completed })}>
      {`${completed}`}
    </p>
  </>
);

Todo.defaultProps = {
  user: {},
};

Todo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,

    adress: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }),

    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }),
  }),
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
