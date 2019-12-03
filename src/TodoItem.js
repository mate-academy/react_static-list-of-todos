import PropTypes from 'prop-types';
import React from 'react';
import User from './User';

const TodoItem = ({ todo: { user, id, title, completed } }) => (
  <>
    <dt>
      {`${id}. ${title}`}
    </dt>
    <dd style={{ marginBottom: '20px' }}>
      <span style={{ color: completed ? 'green' : 'red' }}>
        {completed ? 'completed' : 'not completed'}
      </span>
      <br />
      <span style={{ color: 'blue' }}>
        <User user={user} />
      </span>
    </dd>
  </>
);

TodoItem.propTypes
  = { todo: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default TodoItem;
