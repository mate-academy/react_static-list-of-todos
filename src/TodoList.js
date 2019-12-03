import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
  <table>
    <thead>
      <tr style={
        {
          backgroundColor: '#8e8ee3',
          fontWeight: 'bold',
          height: '15vh',
        }
      }
      >
        <td>ID</td>
        <td>Title</td>
        <td>User name</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {props.todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = { todos: PropTypes.objectOf(PropTypes.any).isRequired };

export default TodoList;
