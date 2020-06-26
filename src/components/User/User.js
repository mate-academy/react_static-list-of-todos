import React from 'react';
import { userShapes } from '../../api/preparedTodosShapes';

const User = ({ user }) => (
  <td>{user.name}</td>
);

User.propTypes = userShapes.isRequired;

export default User;
