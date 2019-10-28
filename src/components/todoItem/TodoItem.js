import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'semantic-ui-react';
import User from '../user/User';

const TodoItem = ({ todo }) => (
  <Table.Row>
    <Table.Cell>
      {todo.completed
        ? <Icon name="circle outline big" />
        : <Icon name="check circle outline big" />
      }
    </Table.Cell>
    <Table.Cell>{todo.title}</Table.Cell>
    <Table.Cell><User user={todo.user} /></Table.Cell>
  </Table.Row>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
    user: PropTypes.object,
  }).isRequired,
};

export default TodoItem;
