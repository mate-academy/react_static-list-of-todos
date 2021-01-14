import PropTypes from 'prop-types';
import { UserType } from './UserType';

export const TodoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserType,
});
