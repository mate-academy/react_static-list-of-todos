import React from 'react';
import './User.scss';
import { UserShape } from '../../Types';

const User = ({ name, username, id }) => (
  <>
    <th>{id}</th>
    <th>{name}</th>
    <th>{username}</th>
  </>
);

User.propTypes = UserShape.isRequired;

export default User;
