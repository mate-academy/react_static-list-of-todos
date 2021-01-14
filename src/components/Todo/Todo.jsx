import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import { TodoTypes } from '../../types';

export const Todo = ({ items }) => (
  <tr>
    <td>{items.title}</td>
    <td>
      {items.completed
        ? 'Is completed ✔'
        : 'Is not completed ❌'
      }
    </td>
    <td>
      <User user={items.user} />
    </td>
  </tr>
);

Todo.propTypes = {
  items: PropTypes.shape(TodoTypes).isRequired,
};
