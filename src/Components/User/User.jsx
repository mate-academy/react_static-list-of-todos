import React from 'react';
import { PreparedTodosType } from '../../types/PreparedTodosTypes';
import './User.css';

export const User = ({ task }) => (
  <p className="userName">{task.user}</p>
);

User.propTypes = PreparedTodosType.isRequired;
