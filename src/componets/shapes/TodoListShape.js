import PropTypes from 'prop-types';
import { TodoShape } from './TodoShape';

export const TodoListShape = PropTypes.arrayOf(TodoShape).isRequired;
