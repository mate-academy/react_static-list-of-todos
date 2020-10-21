import propTypes from 'prop-types';
import { TodoShape } from './TodoShape';

export const TodoListShape = {
  todos: propTypes.arrayOf(TodoShape),
};
