import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoShape = PropTypes.shape({
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: UserShape,
});
