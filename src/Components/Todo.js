import React from 'react';
import PropTypes from 'prop-types';
import { TypeUser } from '../Types';

import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <li>
    <div>
      {'title - '}
      {title}
    </div>
    <div>
      {'completed - '}
      {(completed) ? 'true' : 'false'}
    </div>
    <User user={user} />
    <hr />
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: TypeUser.isRequired,
};
