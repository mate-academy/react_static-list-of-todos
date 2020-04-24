import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react';
import User from './User';

const TodoItem = ({ todo }) => (
  <Table.Row warning>
    <Table.Cell>{todo.id}</Table.Cell>
    <User user={todo.user} />
    <TodoCell compl={todo.completed} />
    <Table.Cell textAlign="left">{todo.title}</Table.Cell>
  </Table.Row>
);

const TodoCell = ({ compl }) => (
  <Table.Cell negative={!compl} positive={compl}>
    <Icon
      color={compl ? 'green' : 'red'}
      name={compl ? 'checkmark' : 'close'}
    />
    {compl ? 'Complebitur' : 'In processus'}
  </Table.Cell>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
TodoCell.propTypes = { compl: PropTypes.bool.isRequired };

export default TodoItem;
