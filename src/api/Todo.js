import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Todo(props) {
  const { item, elem } = props;

  function checkStatus(status) {
    return status ? 'true' : 'false';
  }

  function addClass(status) {
    return status ? 'valid' : 'inValid';
  }

  return (
    <>
      <User name={Object.keys(elem)} />

      <td>
        {item.title}
      </td>

      <td className={addClass(item.completed)}>
        {checkStatus(item.completed)}
      </td>
    </>
  );
}

Todo.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  elem: PropTypes.shape().isRequired,
};

export default Todo;
