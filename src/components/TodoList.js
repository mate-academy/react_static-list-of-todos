import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Todo from './Todo';

const TodoList = ({ list }) => (
  <Table celled className="ui olive inverted table" selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Person</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Completed</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {list.map(todo => <Todo key={todo.id} {...todo} />)}
    </Table.Body>
  </Table>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
