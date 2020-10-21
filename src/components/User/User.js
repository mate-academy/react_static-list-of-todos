import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, taskStatus }) => (
  <span className={taskStatus ? 'js-green' : 'js-red'}>
    <b>{name}</b>
  </span>
);

User.propTypes = UserShape;
