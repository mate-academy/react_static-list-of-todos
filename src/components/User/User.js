import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { name, phone, email } = user;

  return (
    <>
      <p className="todo-list__item-name">{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </>
  );
}

const shape = PropTypes.shape({
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}).isRequired;

User.propTypes = {
  user: shape.isRequired,
};

export default User;
