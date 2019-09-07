import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { name, phone, email } = user;

  // console.log(user);

  return (
    <>
      <p className="todoList__item-name">{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
