import PropTypes from 'prop-types';
import { TodoProptype } from './TodoPropType';

export const TodoListShape = {
  todos: PropTypes.arrayOf(
    PropTypes.shape(TodoProptype),
  ).isRequired,
};
