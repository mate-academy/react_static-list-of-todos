import PropTypes from 'prop-types';
import { ToDoShape } from './ToDoShapes';

export const TodoListShape = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      ...ToDoShape,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
