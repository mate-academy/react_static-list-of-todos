import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ user }) => <td>{user.name}</td>;

Users.propTypes = { user: PropTypes.string.isRequired };

export default Users;
