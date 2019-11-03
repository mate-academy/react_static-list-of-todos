import React from 'react';
import PropTypes from 'prop-types';
import './todoResult.css';

const TodoResult = ({ result }) => (
  <td className={
    result ? 'todo__cell todo__cell_completed'
      : 'todo__cell todo__cell_failed'}
  >
    {result ? 'Hell yeah!)' : 'Oh no'}
  </td>
);

TodoResult.propTypes = {
  result: PropTypes.bool.isRequired,
};

export default TodoResult;
