import React from 'react';
import PropTypes from 'prop-types';
import { TypeTodo } from '../../types';
import { User } from '../User';
import './Todo.scss';

const CompletedTask = ({ status }) => (
  status ? (
    <span className="completed">completed</span>
  ) : (
    <span className="not-completed">not completed</span>
  ));

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    {`task: ${title}`}
    <br />
    {`status: `}
    <CompletedTask status={completed} />
    <br />
    <User {...user} />
  </>
);

CompletedTask.propTypes = {
  status: PropTypes.bool.isRequired,
};

Todo.propTypes = TypeTodo;
