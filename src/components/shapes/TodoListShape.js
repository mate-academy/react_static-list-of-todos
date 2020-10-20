import PropTypes from 'prop-types';
import { TodoShape } from './TodoShape';

export const TodoListShape = PropTypes.shape({
  todos: PropTypes.arrayOf(TodoShape).isRequired,
}).isRequired;
