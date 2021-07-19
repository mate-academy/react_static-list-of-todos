import React from 'react';
import propTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';
import { userTemplate } from '../objFit';

export const ToDo = ({ toDo }) => (
  <>
    <span className="title">{toDo.title}</span>
    <span>
      {'Status: '}
      {toDo.completed ? 'completed' : 'not completed'}
    </span>
    <User user={toDo.user} />
  </>
);

ToDo.propTypes = {
  toDo: propTypes.shape({
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
    user: userTemplate,
  }).isRequired,
};
