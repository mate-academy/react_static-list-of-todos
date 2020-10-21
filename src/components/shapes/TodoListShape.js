import PropTypes from 'prop-types';
import { TodoShape } from './TodoShape';

export const TodoListShape = PropTypes.shape({
  tasks: PropTypes.arrayOf(TodoShape).isRequired,
}).isRequired;
