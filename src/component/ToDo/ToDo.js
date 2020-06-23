import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

function ToDo({ todo }) {
  const { id, title, completed, user } = todo;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td className={completed ? 'yes' : 'no'}>
        {completed ? 'YES' : 'NO'}
      </td>
      <User user={user} />
    </tr>
  );
}

const objectTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

ToDo.propTypes = {
  todo: PropTypes.shape(objectTypes).isRequired,
};

export default ToDo;
