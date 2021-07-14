import React from 'react';
import { PreparedTodosType } from '../../types/PreparedTodosTypes';
import './User.scss';

export const User = ({ task }) => (
  <p className="name">{task.user}</p>
);

User.propTypes = PreparedTodosType.isRequired;
