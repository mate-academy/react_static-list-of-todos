import PropTypes from 'prop-types';
import { FullUserShape } from './FullUserShape';

export const todoShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: FullUserShape.isRequired,
});
