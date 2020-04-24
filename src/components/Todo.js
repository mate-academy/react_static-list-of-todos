import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react';
import User from './User';

const TodoItem = ({ id, user, completed, title }) => (
  <Table.Row warning>
    <Table.Cell>{id}</Table.Cell>
    <User {...user} />
    <TodoCell compl={completed} />
    <Table.Cell textAlign="left">{title}</Table.Cell>
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
  id: PropTypes.number.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
TodoCell.propTypes = {
  compl: PropTypes.bool.isRequired,
};

export default TodoItem;
