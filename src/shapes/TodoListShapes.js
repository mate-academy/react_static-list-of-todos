import PropTypes from 'prop-types';
import { UserNameShapes } from './UserNameShape';

export const TodoListShapes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserNameShapes,
}).isRequired;
