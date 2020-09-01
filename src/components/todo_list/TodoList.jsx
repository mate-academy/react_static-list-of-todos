import React from 'react';
import PropTypes from 'prop-types';
import '../todo_list/TodoList.css';
import Todo from '../todo/Todo';

const TodoList = props => (
  <div className="todos">
    <ul className="todos_list users">
        {props.preparedTodos.map(todo =>
          <li className={"user " + (todo.completed ? "done" : "inProcess")}>
            <Todo {...todo} key={todo.id}/>
          </li>
        )};
    </ul>
  </div>
);

export default TodoList;

TodoList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.objectOf(PropTypes.string).isRequired,
  })).isRequired,
}

