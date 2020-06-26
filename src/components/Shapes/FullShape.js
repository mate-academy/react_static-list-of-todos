import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const FullShape = PropTypes.shape({
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  userId: PropTypes.number.isRequired,
});
