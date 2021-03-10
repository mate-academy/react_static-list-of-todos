import PropTypes from 'prop-types';
import { UserType } from '../UserType/UserType';

export const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  user: UserType,
});
