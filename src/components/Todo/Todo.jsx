import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { TypeUser } from '../../types';

export const Todo = ({ title, completed, user }) => (
  <>
    <li>
      <User {...user} />

      <h2>{title}</h2>

      <span>
        {`completed: ${completed ? 'Yes' : 'No'}`}
      </span>
    </li>
    <br />
    <br />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,

  user: TypeUser.isRequired,
};
