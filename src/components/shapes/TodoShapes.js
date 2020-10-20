import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoShape = PropTypes.shape({
  todos: PropTypes.arrayOf(UserShape).isRequired,
});
