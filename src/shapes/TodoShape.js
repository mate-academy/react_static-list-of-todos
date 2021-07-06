import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserShape.isRequired,
}).isRequired;
